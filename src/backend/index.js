import {
  LocalStream
} from 'extension-streams'
import InternalMessage from '../messages/InternalMessage'
import * as InternalMessageTypes from '../messages/InternalMessageTypes'
import NotificationService from '../services/NotificationService'
import Prompt from '../models/prompt/Prompt'
import * as PromptTypes from '../models/prompt/PromptTypes'
import Error from '../models/errors/Error'
import Storage from '../lib/storage'
import TabsMessage from '../messages/TabsMessage'
import * as TabsMessageTypes from '../messages/TabsMessageTypes'
import BCX from 'bcxjs-api'

let Repeat = new Set()
let prompt = null
export default class Background {
  constructor() {
    this.Params()
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
      case InternalMessageTypes.SIGNATURE:
        if (Repeat.has(message.resolver)){
          break
        }
        Background.signature(sendResponse, message.payload)
        Repeat.add(message.resolver)
        break
      case InternalMessageTypes.SET_PROMPT:
        Background.setPrompt(sendResponse, message.payload)
        break
      case InternalMessageTypes.GET_PROMPT:
        Background.getPrompt(sendResponse)
        break
      case InternalMessageTypes.GET_ADDRESS:
        Background.getAddress(sendResponse)
        break
      case InternalMessageTypes.SETCURRENTNETWORK:
        Background.setCurrentNetwork(sendResponse, message)
        break
      case InternalMessageTypes.INIT_COCOSWEB:
        Background.InitConstentCOCOSWEB(sendResponse, message)
        break
      case InternalMessageTypes.CALL_CONTRACT:
        Background.callContract(sendResponse, message)
        break
    }
  }

  static callContract(sendResponse, message) {
    this.lockGuard(sendResponse, async () => {
      try {
        this.getBCX().callContractFunction(message.payload).then(res => {
          console.log(res)
          console.log(this._getLocalData())
          sendResponse(res)})
      } catch (e) {
        sendResponse(Error.maliciousEvent())
      }
    })
  }

  static InitConstentCOCOSWEB(sendResponse, message){
    this.lockGuard(sendResponse, async () => {
      try {
        let cocosAccount = this._getLocalData().cocosAccount
        let address = this._getLocalData().currentAccount.address
        sendResponse(InternalMessage.widthPayload(InternalMessageTypes.INIT_COCOSWEB, {cocosAccount, address}))
      } catch (e) {
        sendResponse(Error.maliciousEvent())
      }
    })
  }

  static signature(sendResponse, payload) {
    this.lockGuard(sendResponse, async () => {
      try {
        const store = this._getLocalData()
        let whiteList = store.wallet.whiteList.some(ele => {
          return ele.domain === payload.domain && ele.address === payload.toAccount
        })
        if (whiteList) {
          await this.getBCX().transferAsset({
            fromAccount: payload.fromAccount,
            toAccount: payload.toAccount,
            amount: payload.amount,
            memo: payload.memo,
            assetId: payload.coin,
            isPropos: false,
            onlyGetFee: false
          }).then((res) => {
            if (res.code !== 1) {
              Alert({
                message: CommonJs.getI18nMessages(I18n).error[res.code]
              })
            }
          })

          sendResponse(payload);
          return true
        }

        NotificationService.open(
          new Prompt(
            PromptTypes.SIGNATURE,
            payload.domain,
            payload,
            approval => {
              if (chrome.runtime.lastError) {
                // If I click learningPointButton, the line will excute, and log 'ERROR:  {message: "Could not establish connection. Receiving end does not exist."}'
                console.log('ERROR: ', chrome.runtime.lastError)
                return false
              } else if (!approval || !approval.hasOwnProperty('accepted')) {
                sendResponse(
                  Error.signatureError(
                    'signature_rejected',
                    'User rejected the signature request'
                  )
                )
                return false
              }
              if (approval) {
                sendResponse(payload)
                return true
              }
            }
          )
        )
      } catch (e) {
        sendResponse(Error.maliciousEvent())
      }
    })
  }

  static lockGuard(sendResponse, cb) {
    cb()
  }

  static setPrompt(sendResponse, notification) {
    prompt = notification
    sendResponse(true)
  }

  static getPrompt(sendResponse) {
    sendResponse(prompt)
  }

  static getAddress(sendResponse) {
    if (
      this._getLocalData().cocosAccount &&
      this._getLocalData().cocosAccount.accounts
    ) {
      let address = this._getLocalData().cocosAccount.accounts
      sendResponse(address)
    }
  }

  static setCurrentNetwork(sendResponse, message) {
    TabsMessage.widthPayload(TabsMessageTypes.NETWORK_CHANGED, {
      network: message.payload.network
    }).send()
    sendResponse(true)
  }

  // private function
  static _getLocalData() {
    return Storage.get('vuex')
  }

  Params() {
  }

  static getBCX() {
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
    window.NewBCX = NewBCX
    return NewBCX
  }
}
/* eslint-disable no-new */
new Background()
