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
    this._injectscript('js/vendor.js', () => {
      this._injectscript('js/content.js')
    })
  }
  /**
   * watch internal message (LocalStream)
   * waiting message from background or popup
   */
  _watchTabMessaging() {
    LocalStream.watch((request, response) => {
      const message = InternalMessage.fromJson(request)
      this.dispenseMessage(response, message)
    })
  }

  //main.js中添加一个监听，监听来自background.js的消息
  /**
   * handler message by message type
   * @param sendResponse
   * @param message
   */
  dispenseMessage(sendResponse, message) {
    if (!message) return
    switch (message.type) {
      case TabMessageTypes.LOCK_STAUS:
        stream.send(Message.widthPayload(message.type, message.payload), MessageTypes.INJECTED).catch(function(reason){
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
      default:
        stream.send(nonSyncMessage.error(Error.maliciousEvent()), MessageTypes.INJECTED)
    }
  }
  respond(message, payload) {
    if (!isReady) return
    const response = (!payload || payload.hasOwnProperty('isError')) ?
      message.error(payload) :
      message.respond(payload)
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
    InternalMessage.widthPayload(InternalMessageTypes.CALL_CONTRACT, message.payload)
      .send().then(res => {
      this.respond(message, res)
    })
  }
  signature(message) {
    InternalMessage.widthPayloadAndResolver(InternalMessageTypes.SIGNATURE, message.payload, message.resolver)
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
      const address = await this.getAddress()
      stream.send(Message.widthPayload(MessageTypes.INIT_COCOSWEB, {
        address,
        node
      }), MessageTypes.INJECTED)
      isReady = true
    } catch (e) {}
  }
}
// eslint-disable-next-line
new Inject()
