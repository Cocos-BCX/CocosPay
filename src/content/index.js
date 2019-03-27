/**
 * inject tronPay and tronweb to global window
 */
import { EncryptedStream } from 'extension-streams'
import IdGenerator from '../lib/IdGenerator'
import * as MessageTypes from '../messages/MessageTypes'
import utils from '../lib/utils'
import Message from '../messages/Message'
import * as TabMessageTypes from '../messages/TabsMessageTypes'
import BCX from 'bcxjs-api'
import Alert from "../popup/components/kalert/function";
import CommonJs from "../popup/config/common";
import I18n from "../popup/languages";

/***
 * This is just a helper to manage resolving fake-async
 * requests using browser messaging.
 */
class DanglingResolver {
  constructor(_id, _resolve, _reject) {
    this.id = _id
    this.resolve = _resolve
    this.reject = _reject
  }
}

// let NewBCX = bcx.getBCXWithState()
let stream = new WeakMap()
let resolvers = []

const eventQueue = []
class BcxWeb {
  constructor() {
    this.address = ""
    this.cocosAccount = false
    this.BCX = false
  }

  static setBCX(BCX){
    this.BCX = BCX
  }

  static setTransferAsset(tranferCount){
    this.BCX.transferAsset = tranferCount
  }

  static setCallContractFunction(callContractFunction){
    this.BCX.callContractFunction = callContractFunction
  }

  static setAddress(address) {
    this.address = address
  }

  static setCocosAccount(cocosAccount) {
    this.cocosAccount = cocosAccount
  }

  static tranferCount(message) {
    message.payload.domain = utils.strippedHost()
    _send(message.type, message.payload)
    // stream.send(message, MessageTypes.SIGNATURE)
  }
}

const _subscribe = () => {
  stream.listenWith(msg => {
    if (!msg || !msg.hasOwnProperty('type')) return false
    for (let i = 0; i < resolvers.length; i++) {
      if (resolvers[i].id === msg.resolver) {
        // if (msg.type === 'error') resolvers[i].reject(msg.payload)
        // else
        resolvers[i].resolve(msg.payload)
        resolvers = resolvers.slice(i, 1)
      }
    }
  })
}

const _send = (_type, _payload) => {
  return new Promise((resolve, reject) => {
    let id = IdGenerator.numeric(24)
    let message = new Message(_type, _payload, id)
    localStorage.setItem('sing', true)
    // resolvers.push(new DanglingResolver(id, resolve, reject))
    stream.send(message, MessageTypes.CONTENT)
  })
}

function tranferCount(message) {
  message.payload.domain = utils.strippedHost()
  _send(message.type, message.payload)
  // stream.send(message, MessageTypes.SIGNATURE)
}

function callContractFunction(message) {
  console.log("111111111111111111111111")
  console.log(message)
  _send(MessageTypes.CALL_CONTRACT, message)
}

function NewBCX() {
  let bcxNodes = []
  bcxNodes.push({
    url: 'ws://47.93.62.96:8020',
    name: 'COCOS - China - Beijing',
    ip: '47.93.62.96'
  })
  bcxNodes.push({
    url: 'ws://47.93.62.96:8050',
    name: 'COCOS节点1',
    ip: '47.93.62.96'
  })
  bcxNodes.push({
    url: 'ws://39.96.33.61:8080',
    name: 'COCOS节点2',
    ip: '39.96.33.61'
  })
  bcxNodes.push({
    url: 'ws://39.96.29.40:8050',
    name: 'COCOS节点3',
    ip: '39.96.29.40'
  })
  bcxNodes.push({
    url: 'ws://39.106.126.54:8050',
    name: 'COCOS节点4',
    ip: '39.106.126.54'
  })

  let nodeIndex = 0
  let node = bcxNodes[nodeIndex]

  let NewBCX = new BCX({
    default_ws_node: node.url,
    ws_node_list: [{
      url: node.url,
      name: node.name
    }],
    networks: [{
      core_asset: 'COCOS',
      chain_id: '53b98adf376459cc29e5672075ed0c0b1672ea7dce42b0b1fe5e021c02bda640'
    }],
    faucet_url: 'http://' + node.ip + ':3000',
    auto_reconnect: true,
    worker: false
  })
  return NewBCX
}
let bcxWeb = NewBCX()
export default class Content {
  constructor() {
    // Injecting an encrypted stream into the web application
    stream = new EncryptedStream(MessageTypes.INJECTED, IdGenerator.text(64))
    stream.listenWith(msg => {
      this.contentListener(msg)
    })
    // Syncing the streams between the extension and the web application
    stream.sync(MessageTypes.CONTENT, stream.key)
    _subscribe()
  }
  contentListener(msg) {
    if (!msg) return
    // Always including the domain for every request.
    msg.domain = utils.strippedHost()

    let nonSyncMessage = Message.fromJson(msg)
    switch (msg.type) {
      case MessageTypes.INIT_COCOSWEB:
        this.initCOCOSWeb(nonSyncMessage)
        break
      case MessageTypes.SET_NODE:
        this.setNode(nonSyncMessage)
        break
      case MessageTypes.SET_ADDRESS:
        this.setAddress(nonSyncMessage)
        break
      case TabMessageTypes.LOCK_STAUS:
        this.setlockStatus(nonSyncMessage)
        break
      case TabMessageTypes.ADDRESS_CHANGED:
        this.setAddress(nonSyncMessage)
        break
      case TabMessageTypes.NETWORK_CHANGED:
        this.setNetWork(nonSyncMessage)
        break
    }
  }

  // async loginBCXAccount(accounts, passwords){
  //   await bcxWeb.passwordLogin({
  //     account: accounts,
  //     password: passwords
  //   }).then((res) => {
  //     if (res.code !== 1) {
  //       console.log(res)
  //     }
  //   })
  // }

  initCOCOSWeb(message) {
    // console.log('CocosPay init initCOCOSWeb')
    const payload = message.payload
    console.log("66666666666666666")
    console.log(payload)
    console.log("66666666666666666")
    if (payload.address || payload.cocosAccount) {
      // this.loginBCXAccount(payload.cocosAccount.accounts, payload.cocosAccount.passwords)

      // bcxWeb.passwordLogin({
      //   account: payload.cocosAccount.accounts,
      //   password: payload.cocosAccount.passwords
      // }).then((res) => {
      //   if (res.code !== 1) {
      //     console.log(res)
      //   }
      // })
      // console.log("8888888888888888888")
      BcxWeb.setBCX(bcxWeb)
      // BcxWeb.setCocosAccount(payload.cocosAccount)
      BcxWeb.setAddress(payload.address)
      BcxWeb.setTransferAsset(tranferCount)
      BcxWeb.setCallContractFunction(callContractFunction)
      window.BcxWeb = BcxWeb
      // window.BCX = bcxWeb
    }
    eventQueue.forEach(({ resolve, reject, args, func }, index) => {
      func(...args)
        .then(resolve)
        .catch(reject)
        .then(() => console.log(`Event request #${index + 1} completed`))
    })
  }
  setNode(message) {
    const payload = message.payload
  }
  setAddress(message) {
    const payload = message.payload
    BcxWeb.setAddress(payload.address)
  }
  setNetWork(message) {
    const payload = message.payload
  }
  setlockStatus(message) {
    const payload = message.payload
    if (payload.unlocked) {
      console.info('CocosPay is unlocked')
    } else {
      console.info('CocosPay is locked')
    }
  }
}
// eslint-disable-next-line
new Content()
