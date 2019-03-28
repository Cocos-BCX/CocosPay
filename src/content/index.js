/**
 * inject tronPay and tronweb to global window
 */
import { EncryptedStream } from 'extension-streams'
import IdGenerator from '../lib/IdGenerator'
import * as MessageTypes from '../messages/MessageTypes'
import utils from '../lib/utils'
import Message from '../messages/Message'
import * as TabMessageTypes from '../messages/TabsMessageTypes'
import newBcx from '../popup/utils/newBcx'

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

let stream = new WeakMap()
let resolvers = []

const eventQueue = []
class BcxWeb {
  constructor() {
    this.address = ""
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

  static tranferCount(message) {
    message.payload.domain = utils.strippedHost()
    _send(message.type, message.payload)
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
}

function callContractFunction(message) {
  console.log(message)
  _send(MessageTypes.CALL_CONTRACT, message)
}

let bcxWeb = newBcx.GetNewBCX()
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

  initCOCOSWeb(message) {
    // console.log('CocosPay init initCOCOSWeb')
    const payload = message.payload
    if (payload.address) {
      BcxWeb.setBCX(bcxWeb)
      BcxWeb.setAddress(payload.address)
      BcxWeb.setTransferAsset(tranferCount)
      BcxWeb.setCallContractFunction(callContractFunction)
      window.BcxWeb = BcxWeb
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
