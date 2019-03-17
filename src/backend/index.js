import {
  LocalStream
} from 'extension-streams'
import InternalMessage from '../messages/InternalMessage'
import * as InternalMessageTypes from '../messages/InternalMessageTypes'
import mapTransaction from '../lib/mapTransaction'
import NotificationService from '../services/NotificationService'
import Prompt from '../models/prompt/Prompt'
import * as PromptTypes from '../models/prompt/PromptTypes'
import Error from '../models/errors/Error'
import Storage from '../lib/storage'
import TabsMessage from '../messages/TabsMessage'
import * as TabsMessageTypes from '../messages/TabsMessageTypes'
import utils from '../lib/utils'
import TronWeb from 'tronweb'
import BCX from 'bcxjs-api'
// eslint-disable-next-line
let seed = ''
// timer
let timeoutLocker = null
// timer interval time
let intervalTime = 0

let prompt = null;
let login = true
// export function NewBCX() {
//   let bcxNodes = []
//   bcxNodes.push({
//     url: 'ws://47.93.62.96:8050',
//     name: 'COCOS节点1',
//     ip: '47.93.62.96'
//   })
//   bcxNodes.push({
//     url: 'ws://39.96.33.61:8080',
//     name: 'COCOS节点2',
//     ip: '39.96.33.61'
//   })
//   bcxNodes.push({
//     url: 'ws://39.96.29.40:8050',
//     name: 'COCOS节点3',
//     ip: '39.96.29.40'
//   })
//   bcxNodes.push({
//     url: 'ws://39.106.126.54:8050',
//     name: 'COCOS节点4',
//     ip: '39.106.126.54'
//   })

//   let nodeIndex = 0
//   let node = bcxNodes[nodeIndex]

//   let NewBCX = new BCX({
//     default_ws_node: node.url,
//     ws_node_list: [{
//       url: node.url,
//       name: node.name
//     }],
//     networks: [{
//       core_asset: 'COCOS',
//       chain_id: '53b98adf376459cc29e5672075ed0c0b1672ea7dce42b0b1fe5e021c02bda640'
//     }],
//     faucet_url: 'http://' + node.ip + ':3000',
//     auto_reconnect: true,
//     worker: false
//   })
//   return NewBCX
// }
export default class Background {
  constructor() {
    this.NewBCX()
    this.watchInternalMessaging()
  }
  // watch internal message (LocalStream)
  watchInternalMessaging() {
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
    switch (message.type) {
      //     case InternalMessageTypes.SET_SEED:
      //       Background.setSeed(sendResponse, message.payload)
      //       break
      //     case InternalMessageTypes.IS_UNLOCKED:
      //       Background.isUnlocked(sendResponse)
      //       break
      //     case InternalMessageTypes.SET_TIMEOUT:
      //       Background.setTimeout(sendResponse, message.payload)
      //       break
      //     case InternalMessageTypes.INIT_TRONWEB:
      //       Background.initTronWeb(sendResponse)
      //       break
      //     case InternalMessageTypes.SIGNATURE:
      //       Background.signature(sendResponse, message.payload)
      //       break
      //     case InternalMessageTypes.SET_PROMPT:
      //       Background.setPrompt(sendResponse, message.payload)
      //       break
      //     case InternalMessageTypes.GET_PROMPT:
      //       Background.getPrompt(sendResponse)
      //       break
      case InternalMessageTypes.GET_ADDRESS:
        Background.getAddress(sendResponse)
        break
        //     case InternalMessageTypes.GET_NETWORK:
        //       Background.getNetwork(sendResponse)
        //       break
        //     case InternalMessageTypes.SETCURRENTACCOUNT:
        //       Background.setCurrentAccount(sendResponse, message)
        //       break
        //     case InternalMessageTypes.SETCURRENTNETWORK:
        //       Background.setCurrentNetwork(sendResponse, message)
        //       break
        //     case InternalMessageTypes.ENCRYPTKEYSTORE:
        //       Background.encryptKeystore(sendResponse, message)
        //       break
        //     case InternalMessageTypes.DECRYPTKEYSTORE:
        //       Background.decryptKeystore(sendResponse, message)
        //       break
        //     case InternalMessageTypes.SIGNSENDTRANSACTION:
        //       Background.signSendTransaction(sendResponse, message)
        //       break
    }
  }

  // static setSeed(sendResponse, _seed) {
  //   seed = _seed
  //   sendResponse(true)
  //   // send content
  //   TabsMessage.widthPayload(TabsMessageTypes.LOCK_STAUS, {
  //     unlocked: this._isUnlocked()
  //   }).send()
  // }

  // static setTimeout(sendResponse, _time) {
  //   intervalTime = _time
  //   sendResponse(true)
  // }

  // static checkAutoLock() {
  //   if (intervalTime === 0) return false
  //   if (timeoutLocker) clearTimeout(timeoutLocker)
  //   timeoutLocker = setTimeout(() => {
  //     seed = ''
  //   }, intervalTime * 1000)
  // }

  // static initTronWeb(sendResponse) {
  //   sendResponse({
  //     address: '',
  //     node: {
  //       fullNode: '',
  //       solidityNode: '',
  //       eventServer: ''
  //     }
  //   })
  // }

  // static isUnlocked(sendResponse) {
  //   sendResponse(this._isUnlocked())
  // }

  // static signature(sendResponse, payload) {
  //   this.lockGuard(sendResponse, async () => {
  //     try {
  //       const tronWeb = Background._getTronWeb()
  //       const {
  //         transaction,
  //         input,
  //         domain
  //       } = payload
  //       const contractType = transaction.raw_data.contract[0].type
  //       const {
  //         mapped,
  //         error
  //       } = await mapTransaction(
  //         tronWeb,
  //         contractType,
  //         input
  //       )
  //       if (error) {
  //         sendResponse(
  //           Error.signatureError(
  //             'signature_rejected',
  //             'User rejected the signature request'
  //           )
  //         )
  //       }
  //       if (!mapped) {
  //         sendResponse(
  //           Error.signatureError(
  //             'signature_rejected',
  //             'User rejected the signature request'
  //           )
  //         )
  //       }
  //       const signedTransaction = await tronWeb.trx.signTransaction(
  //         mapped.transaction || mapped,
  //         this._currentPrivateKey(),
  //         0
  //       )
  //       const store = this._getLocalData()
  //       // TriggerSmartContract
  //       if (
  //         signedTransaction.raw_data.contract[0].type === 'TriggerSmartContract'
  //       ) {
  //         let whiteList = store.wallet.whiteList.some(ele => {
  //           return (
  //             ele.domain === domain &&
  //             ele.address ===
  //             signedTransaction.raw_data.contract[0].parameter.value
  //             .contract_address
  //           )
  //         })
  //         if (whiteList) {
  //           sendResponse(signedTransaction)
  //           return false
  //         }
  //       }
  //       NotificationService.open(
  //         new Prompt(
  //           PromptTypes.SIGNATURE,
  //           domain, {
  //             hostname: domain,
  //             signedTransaction,
  //             input
  //           },
  //           approval => {
  //             if (!approval || !approval.hasOwnProperty('accepted')) {
  //               sendResponse(
  //                 Error.signatureError(
  //                   'signature_rejected',
  //                   'User rejected the signature request'
  //                 )
  //               )
  //               return false
  //             }
  //             if (approval) {
  //               sendResponse(approval.transaction)
  //             }
  //           }
  //         )
  //       )
  //     } catch (e) {
  //       sendResponse(Error.maliciousEvent())
  //     }
  //   })
  // }

  // static lockGuard(sendResponse, cb) {
  //   if (!seed.length) {
  //     sendResponse(Error.locked())
  //   } else cb()
  // }

  // static setPrompt(sendResponse, notification) {
  //   prompt = notification
  //   sendResponse(true)
  // }

  // static getPrompt(sendResponse) {
  //   sendResponse(prompt)
  // }

  static getAddress(sendResponse) {
    if (this._getLocalData.cocosAccount && this._getLocalData().cocosAccount.accounts) {
      let address = this._getLocalData().cocosAccount.accounts;
      sendResponse(address)
    }
    // // let address = this._isUnlocked() ?
    // //   this._getLocalData().cocosAccount.accounts:
    // //   ''
  }

  // static getNetwork(sendResponse) {
  //   sendResponse(this._getLocalData().currentNetwork)
  // }

  // static setCurrentAccount(sendResponse, message) {
  //   TabsMessage.widthPayload(TabsMessageTypes.ADDRESS_CHANGED, {
  //     address: message.payload.address
  //   }).send()
  //   sendResponse(true)
  // }

  // static setCurrentNetwork(sendResponse, message) {
  //   TabsMessage.widthPayload(TabsMessageTypes.NETWORK_CHANGED, {
  //     network: message.payload.network
  //   }).send()
  //   sendResponse(true)
  // }

  // static encryptKeystore(sendResponse, message) {
  //   if (this._isUnlocked()) {
  //     const privateKey = message.payload.privateKey
  //     if (utils.validatePrivateKey(privateKey)) {
  //       const keystore = utils.encrypt(privateKey, seed)
  //       sendResponse({
  //         keystore: keystore
  //       })
  //     } else {
  //       sendResponse(false)
  //     }
  //   } else {
  //     sendResponse(false)
  //   }
  // }

  // static decryptKeystore(sendResponse, message) {
  //   if (this._isUnlocked()) {
  //     let privateKey = utils.decrypt(message.payload.keystore, seed)
  //     sendResponse({
  //       privateKey: privateKey
  //     })
  //   } else {
  //     sendResponse(false)
  //   }
  // }

  // static async signSendTransaction(sendResponse, message) {
  //   if (this._isUnlocked()) {
  //     // check account
  //     var account = false
  //     const store = this._getLocalData()
  //     for (var i = 0, len = store.wallet.accounts.length; i < len; i++) {
  //       if (store.wallet.accounts[i].address === message.payload.address) {
  //         account = store.wallet.accounts[i]
  //         break
  //       }
  //     }
  //     if (account) {
  //       const tronWeb = this._getTronWeb()
  //       const {
  //         transaction
  //       } = message.payload
  //       let privateKey = utils.decrypt(account.keystore, seed)
  //       const signTransaction = await tronWeb.trx.signTransaction(
  //         transaction,
  //         privateKey,
  //         0
  //       )
  //       const result = await tronWeb.trx.sendRawTransaction(signTransaction)
  //       // result is object {result: result}
  //       sendResponse(result)
  //     } else {
  //       sendResponse(false)
  //     }
  //   } else {
  //     sendResponse(false)
  //   }
  // }

  // // private function
  static _getLocalData() {
    return Storage.get('vuex')
  }

  // static _isUnlocked() {
  //   // if no seed is set, is locked
  //   return seed !== ''
  // }

  // static _currentPrivateKey() {
  //   let keystore = this._getLocalData().currentAccount.keystore
  //   return utils.decrypt(keystore, seed)
  // }

  // static _getTronWeb() {
  //   const store = this._getLocalData()
  //   const tronWeb = new TronWeb(
  //     store.currentNetwork.fullNodeUrl,
  //     store.currentNetwork.solidityUrl,
  //     store.currentNetwork.eventGridUrl
  //   )
  //   tronWeb.defaultAccount = store.currentAccount.address
  //   return tronWeb
  // }
  NewBCX() {
    let bcxNodes = []
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
}
/* eslint-disable no-new */
new Background()
