import {
  EncryptedStream
} from 'extension-streams'
import IdGenerator from '../lib/IdGenerator'
import * as MessageTypes from '../messages/MessageTypes'
import utils from '../lib/utils'
import Message from '../messages/Message'
import * as TabMessageTypes from '../messages/TabsMessageTypes'
import newBcx from '../popup/utils/newBcx'
import Storage from '../lib/storage'
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
    this.account_name = ""
    this.BCX = false
  }

  static setBCX(BCX) {
    this.BCX = BCX
  }

  static setTransferAsset(tranferCount) {
    this.BCX.transferAsset = tranferCount
  }

  static setCallContractFunction(callContractFunction) {
    this.BCX.callContractFunction = callContractFunction
  }

  static setCreatNHAssetOrder(creatNHAssetOrder) {
    this.BCX.creatNHAssetOrder = creatNHAssetOrder
  }

  static setFillNHAssetOrder(fillNHAssetOrder) {
    this.BCX.fillNHAssetOrder = fillNHAssetOrder
  }

  static setCancelNHAssetOrder(cancelNHAssetOrder) {
    this.BCX.cancelNHAssetOrder = cancelNHAssetOrder
  }

  static setTransferNHAsset(transferNHAsset) {
    this.BCX.transferNHAsset = transferNHAsset
  }

  static setRegisterCreator(registerCreator) {
    this.BCX.registerCreator = registerCreator
  }

  static setCreatWorldView(creatWorldView) {
    this.BCX.creatWorldView = creatWorldView
  }

  static setCreatNHAsset(creatNHAsset) {
    this.BCX.creatNHAsset = creatNHAsset
  }

  static setDeleteNHAsset(deleteNHAsset) {
    this.BCX.deleteNHAsset = deleteNHAsset
  }
  static setpublishVotes(publishVotes) {
    this.BCX.publishVotes = publishVotes
  }

  static setGetAccountInfo(getAccountInfo) {
    this.BCX.getAccountInfo = getAccountInfo
  }

  static setAddress(account_name) {
    this.account_name = account_name
  }

  static callContractFunction(message) {
    message.payload.domain = utils.strippedHost()
    _send(MessageTypes.CALL_CONTRACT, message)
  }

  static creatNHAssetOrder(message) {
    message.payload.domain = utils.strippedHost()
    _send(MessageTypes.CREATE_NH_ASSET_ORDER, message)
  }

  static getAccountInfo(message) {
    // console.log(message);
    // message.payload.domain = utils.strippedHost()
    _send(MessageTypes.GET_ACCOUNT_INFO, message)
  }

  static tranferCount(message) {
    message.payload.domain = utils.strippedHost()
    _send(MessageTypes.SIGNATURE, message)
  }

  static fillNHAssetOrder(message) {
    message.payload.domain = utils.strippedHost()
    _send(MessageTypes.FILL_NH_ASSET_ORDER, message)
  }

  static cancelNHAssetOrder(message) {
    message.payload.domain = utils.strippedHost()
    _send(MessageTypes.CANCEL_NH_ASSET_ORDER, message)
  }

  static transferNHAsset(message) {
    message.payload.domain = utils.strippedHost()
    _send(MessageTypes.TRANSFER_NH_ASSET, message)
  }
}

const _subscribe = () => {
  stream.listenWith(async msg => {
    if (!msg || !msg.hasOwnProperty('type')) return false
    for (let i = 0; i < resolvers.length; i++) {
      if (resolvers[i].id === msg.resolver) {
        // if (msg.type === 'error') resolvers[i].reject(msg.payload)
        // else
        // let res = await callListen(msg.payload);
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
    resolvers.push(new DanglingResolver(id, resolve, reject))
    stream.send(message, MessageTypes.CONTENT)
  })
}

function getAccountInfo(message) {
  return new Promise((resolve, reject) => {
    resolve(_send(MessageTypes.GET_ACCOUNT_INFO, message))
  })
}


function tranferCount(message) {
  return new Promise((resolve, reject) => {
    resolve(_send(MessageTypes.SIGNATURE, message))
  })
  // _send(MessageTypes.SIGNATURE, message)
}

function creatNHAssetOrder(message) {
  return new Promise((resolve, reject) => {
    resolve(_send(MessageTypes.CREATE_NH_ASSET_ORDER, message))
  })
}

function callContractFunction(message) {
  return new Promise((resolve, reject) => {
    resolve(_send(MessageTypes.CALL_CONTRACT, message))
  })
}

function fillNHAssetOrder(message) {
  return new Promise((resolve, reject) => {
    resolve(_send(MessageTypes.FILL_NH_ASSET_ORDER, message))
  })
}

function cancelNHAssetOrder(message) {
  return new Promise((resolve, reject) => {
    resolve(_send(MessageTypes.CANCEL_NH_ASSET_ORDER, message))
  })
}

function transferNHAsset(message) {
  return new Promise((resolve, reject) => {
    resolve(_send(MessageTypes.TRANSFER_NH_ASSET, message))
  })
}

function registerCreator(message) {
  return new Promise((resolve, reject) => {
    resolve(_send(MessageTypes.REGISTER_CREATOR, message))
  })
}

function creatWorldView(message) {
  return new Promise((resolve, reject) => {
    resolve(_send(MessageTypes.CREATE_WORLDVIEW, message))
  })
}

function creatNHAsset(message) {
  return new Promise((resolve, reject) => {
    resolve(_send(MessageTypes.CREATE_NH_ASSET, message))
  })
}

function deleteNHAsset(message) {
  return new Promise((resolve, reject) => {
    resolve(_send(MessageTypes.DELETE_NH_ASSET, message))
  })
}
function publishVotes(message) {
  return new Promise((resolve, reject) => {
    resolve(_send(MessageTypes.PUBLISH_VOTES, message))
  })
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
    stream.onSync(async () => {
      document.dispatchEvent(new CustomEvent("cocosLoaded"))
    })
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
    // if (payload.account_name) {
    BcxWeb.setBCX(bcxWeb)
    BcxWeb.setAddress(payload.account_name)
    BcxWeb.setTransferAsset(tranferCount)
    BcxWeb.setCallContractFunction(callContractFunction)
    BcxWeb.setGetAccountInfo(getAccountInfo)
    BcxWeb.setCreatNHAssetOrder(creatNHAssetOrder)
    BcxWeb.setFillNHAssetOrder(fillNHAssetOrder)
    BcxWeb.setCancelNHAssetOrder(cancelNHAssetOrder)
    BcxWeb.setTransferNHAsset(transferNHAsset)
    BcxWeb.setRegisterCreator(registerCreator)
    BcxWeb.setCreatWorldView(creatWorldView)
    BcxWeb.setCreatNHAsset(creatNHAsset)
    BcxWeb.setDeleteNHAsset(deleteNHAsset)
    BcxWeb.setpublishVotes(publishVotes)
    BcxWeb.BCX.account_name = payload.account_name
    window.BcxWeb = BcxWeb.BCX
    // }
    eventQueue.forEach(({
      resolve,
      reject,
      args,
      func
    }, index) => {
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
