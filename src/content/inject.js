import {
  EncryptedStream,
  LocalStream
} from 'extension-streams'
import Message from '../messages/Message'
import InternalMessage from '../messages/InternalMessage'
import * as MessageTypes from '../messages/MessageTypes'
import * as InternalMessageTypes from '../messages/InternalMessageTypes'
import Error from '../models/errors/Error'
import IdGenerator from '../lib/IdGenerator'
import utils from '../lib/utils'
import newBcx from '../popup/utils/newBcx'
import * as TabMessageTypes from '../messages/TabsMessageTypes'
import Storage from '../lib/storage'
let stream = new WeakMap()
let isReady = false
class Inject {
  constructor() {
    this._setEncryptedStream()
    this._injectInteractionScript()
    this._watchTabMessaging()
  }
  /**
   * init EncryptedStream
   * stream object is message fillter with content.js
   */
  _setEncryptedStream() {
    stream = new EncryptedStream(MessageTypes.CONTENT, IdGenerator.text(64))
    stream.listenWith((msg) => this._contentListener(msg))
    stream.onSync(async () => {
      this.initCOCOSWeb()
    })
  }
  /**
   * inject script file to document
   * @param {} scriptsrc
   */
  _injectscript(scriptsrc, callback = false) {
    const container = (document.head || document.documentElement)
    const content = chrome.extension.getURL(scriptsrc)
    const script = document.createElement('script')
    script.setAttribute('type', 'text/javascript')
    script.setAttribute('src', content)
    script.onload = () => {
      script.remove()
      if (callback) callback()
    }
    container.insertBefore(script, container.children[0])
  }
  /***
   * Injecting the interaction script into the application.
   * This injects an encrypted stream into the application which will
   * sync up with the one here.
   */
  _injectInteractionScript() {
    this._injectscript('js/cocospay.js', () => {
      this._injectscript('js/content.js')
    })
  }
  /**np
   * watch internal message (LocalStream)
   * waiting message from background or popup
   */
  _watchTabMessaging() {
    LocalStream.watch((request, response) => {
      const message = InternalMessage.fromJson(request)
      this.dispenseMessage(response, message)
    })
  }

  /**
   * handler message by message type
   * @param sendResponse
   * @param message
   */
  dispenseMessage(sendResponse, message) {
    if (!message) return
    switch (message.type) {
      case TabMessageTypes.LOCK_STAUS:
        stream.send(Message.widthPayload(message.type, message.payload), MessageTypes.INJECTED).catch(function (reason) {
          // Failed silently if receiveing end does not exist
        })
        if (message.payload.unlocked) {
          this.initCOCOSWeb()
        }
        break
      case TabMessageTypes.ADDRESS_CHANGED:
        break
      default:
        break
    }
  }
  _contentListener(msg) {
    if (!isReady) return
    if (!msg) return

    // Always including the domain for every request.
    msg.domain = utils.strippedHost()
    let nonSyncMessage = Message.fromJson(msg)

    if (!stream.synced && (!msg.hasOwnProperty('type') || msg.type !== 'sync')) {
      stream.send(nonSyncMessage.error(Error.maliciousEvent()), MessageTypes.INJECTED)
      return
    }
    switch (msg.type) {
      case 'sync':
        this.sync(msg)
        break
      case MessageTypes.SIGNATURE:
        this.signature(nonSyncMessage)
        break
      case MessageTypes.CALL_CONTRACT:
        this.callContract(nonSyncMessage)
        break
      case MessageTypes.GET_ACCOUNT_INFO:
        this.getAccountInfo(nonSyncMessage)
        break
      case MessageTypes.CREATE_NH_ASSET_ORDER:
        this.creatNHAssetOrder(nonSyncMessage)
        break
      case MessageTypes.FILL_NH_ASSET_ORDER:
        this.fillNHAssetOrder(nonSyncMessage)
        break
      case MessageTypes.CANCEL_NH_ASSET_ORDER:
        this.cancelNHAssetOrder(nonSyncMessage)
        break
      case MessageTypes.TRANSFER_NH_ASSET:
        this.transferNHAsset(nonSyncMessage)
        break
      case MessageTypes.REGISTER_CREATOR:
        this.registerCreator(nonSyncMessage)
        break
      case MessageTypes.CREATE_WORLDVIEW:
        this.creatWorldView(nonSyncMessage)
        break
      case MessageTypes.CREATE_NH_ASSET:
        this.creatNHAsset(nonSyncMessage)
        break
      case MessageTypes.DELETE_NH_ASSET:
        this.deleteNHAsset(nonSyncMessage)
        break
      case MessageTypes.PUBLISH_VOTES:
        this.publishVotes(nonSyncMessage)
        break
      default:
        stream.send(nonSyncMessage.error(Error.maliciousEvent()), MessageTypes.INJECTED)
    }
  }
  respond(message, payload) {
    if (!isReady) return
    const response = (payload && payload.hasOwnProperty('isError')) ?
      message.error(payload) :
      message.respond(payload);
    stream.send(response, MessageTypes.INJECTED)
  }
  sync(message) {
    stream.key = message.handshake.length ? message.handshake : null
    stream.send({
      type: 'sync'
    }, MessageTypes.INJECTED)
    stream.synced = true
  }
  callContract(message) {
    InternalMessage.widthPayloadAndResolver(InternalMessageTypes.CALL_CONTRACT, message, message.resolver)
      .send().then(res => {
        this.respond(message, res)
      })
  }
  creatNHAssetOrder(message) {
    InternalMessage.widthPayloadAndResolver(InternalMessageTypes.CREATE_NH_ASSET_ORDER, message, message.resolver)
      .send().then(res => {
        this.respond(message, res)
      })
  }
  getAccountInfo(message) {
    message.payload = {}
    InternalMessage.widthPayloadAndResolver(InternalMessageTypes.GET_ACCOUNT_INFO, message, message.resolver)
      .send().then(res => {
        this.respond(message, res)
      })
  }
  fillNHAssetOrder(message) {
    InternalMessage.widthPayloadAndResolver(InternalMessageTypes.FILL_NH_ASSET_ORDER, message, message.resolver)
      .send().then(res => {
        this.respond(message, res)
      })
  }
  transferNHAsset(message) {
    InternalMessage.widthPayloadAndResolver(InternalMessageTypes.TRANSFER_NH_ASSET, message, message.resolver)
      .send().then(res => {
        this.respond(message, res)
      })
  }

  registerCreator(message) {
    InternalMessage.widthPayloadAndResolver(InternalMessageTypes.REGISTER_CREATOR, message, message.resolver)
      .send().then(res => {
        this.respond(message, res)
      })
  }

  creatWorldView(message) {
    InternalMessage.widthPayloadAndResolver(InternalMessageTypes.CREATE_WORLDVIEW, message, message.resolver)
      .send().then(res => {
        this.respond(message, res)
      })
  }

  cancelNHAssetOrder(message) {
    InternalMessage.widthPayloadAndResolver(InternalMessageTypes.CANCEL_NH_ASSET_ORDER, message, message.resolver)
      .send().then(res => {
        this.respond(message, res)
      })
  }
  signature(message) {
    InternalMessage.widthPayloadAndResolver(InternalMessageTypes.SIGNATURE, message, message.resolver)
      .send().then(res => {
        this.respond(message, res)
      })
  }

  creatNHAsset(message) {
    InternalMessage.widthPayloadAndResolver(InternalMessageTypes.CREATE_NH_ASSET, message, message.resolver)
      .send().then(res => {
        this.respond(message, res)
      })
  }
  deleteNHAsset(message) {
    InternalMessage.widthPayloadAndResolver(InternalMessageTypes.DELETE_NH_ASSET, message, message.resolver)
      .send().then(res => {
        this.respond(message, res)
      })
  }
  publishVotes(message) {
    InternalMessage.widthPayloadAndResolver(InternalMessageTypes.PUBLISH_VOTES, message, message.resolver)
      .send().then(res => {
        this.respond(message, res)
      })
  }
  getAddress() {
    return InternalMessage.signal(InternalMessageTypes.GET_ADDRESS)
      .send()
  }
  getNetwork() {
    return InternalMessage.signal(InternalMessageTypes.GET_NETWORK)
      .send()
  }
  async initCOCOSWeb() {
    
    let node = newBcx.GetDefaultNodes()
    try {
      const account_name = await this.getAddress()
      stream.send(Message.widthPayload(MessageTypes.INIT_COCOSWEB, {
        account_name,
        node
      }), MessageTypes.INJECTED)
      isReady = true
      console.log('init CocosPay Success')
    } catch (e) {
      console.log('init CocosPay Fail')
    }
  }
  
}


// chrome.runtime.sendMessage({type: "init"}, function(response) {
// });

// chrome.extension.onMessage.addListener(
//   function (request, sender, sendResponse) {
//       let changeNode = request.content
//       Storage.set("choose_node", changeNode);
//       if (request.type == "init") {
//         if (!Storage.get("choose_node").name || Storage.get("choose_node").name != request.content.name) {
//           location.reload()
//         }
//       }
//       function setCookie(name, value) {
//           var str = name + "=" + escape(value) + ";domain=www.cocosabc.com;path=/";
//           var date = new Date();
//           date.setTime(date.getTime() + 365 * 24 * 60 * 60 * 1000); //设置date为当前时间加一年

//           str += ";expires=Session";
//           document.cookie = str;
//       }
//       function getCookie(cname){
//         var name = cname + "=";
//         var ca = document.cookie.split(';');
//         for(var i=0; i<ca.length; i++) {
//           var c = ca[i].trim();
//           if (c.indexOf(name)==0) { return c.substring(name.length,c.length); }
//         }
//         return "";
//       }
//       // testnet  mainnet
//       if (request.name == "Main") {
//         if (getCookie("network") == 'mainnet') return false
//         setCookie("network", "mainnet")
//       } else {
//         if (getCookie("network") == 'testnet') return false
//         setCookie("network", "testnet")
//       }
//   }
// );
// eslint-disable-next-line
new Inject()
