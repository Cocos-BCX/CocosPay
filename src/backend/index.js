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
import newBcx from '../popup/utils/newBcx'

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
        if (Repeat.has(message.resolver)) {
          break
        }
        Background.signature(sendResponse, message.payload)
        Repeat.add(message.resolver)
        break
      case InternalMessageTypes.SET_PROMPT:
        Background.setPrompt(sendResponse, message)
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
      case InternalMessageTypes.CALL_CONTRACT:
        Background.callContract(sendResponse, message.payload)
        Repeat.add(message.resolver)
        break
      case InternalMessageTypes.GET_ACCOUNT_INFO:
        Background.getAccountInfo(sendResponse, message.payload)
        Repeat.add(message.resolver)
        break
    }
  }

  static getAccountInfo(sendResponse, payload) {
    this.lockGuard(sendResponse, async () => {
      try {
        // this.getBCX().getAccountInfo().then(res => {
        //   console.log(res);
        // })
        let info = await this.getBCX().getAccountInfo()
        sendResponse(info)
        return
      } catch (e) {
        sendResponse(Error.maliciousEvent())
      }
    })
  }

  static callContract(sendResponse, payload) {
    this.lockGuard(sendResponse, async () => {
      try {
        const store = this._getLocalData()
        let contractWhiteList = store.wallet.contractWhiteList.some(ele => {
          return ele.nameOrId === payload.payload.nameOrId && ele.functionName === payload.payload.functionName && ele.domain === payload.domain
        })
        if (contractWhiteList) {
          await this.getBCX().callContractFunction({
            nameOrId: payload.payload.nameOrId,
            functionName: payload.payload.functionName,
            valueList: payload.payload.valueList,
            runTime: payload.payload.runTime,
            onlyGetFee: payload.payload.onlyGetFee,
          }).then((res) => {
            if (res.code !== 1) {
              Alert({
                message: CommonJs.getI18nMessages(I18n).error[res.code]
              })
            }
            sendResponse(res);
            return
          })
        } else {
          this.openDialog(sendResponse, payload)
        }

      } catch (e) {
        console.log(e)
        sendResponse(Error.maliciousEvent())
      }
    })
  }

  static signature(sendResponse, payload) {

    this.lockGuard(sendResponse, async () => {
      try {
        const store = this._getLocalData()
        let whiteList = store.wallet.whiteList.some(ele => {
          return ele.domain === payload.domain && ele.account_name === payload.toAccount
        })
        if (whiteList) {
          await this.getBCX().transferAsset({
            fromAccount: payload.fromAccount,
            toAccount: payload.toAccount,
            amount: payload.amount,
            memo: payload.memo,
            assetId: payload.coin,
            isPropose: false,
            onlyGetFee: false
          }).then((res) => {
            if (res.code !== 1) {
              Alert({
                message: CommonJs.getI18nMessages(I18n).error[res.code]
              })
            }
            sendResponse(res);
            return true
          })
        } else {
          this.openDialog(sendResponse, payload)
        }
      } catch (e) {
        sendResponse(Error.maliciousEvent())
      }
    })
  }

  static openDialog(sendResponse, payload) {
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
            sendResponse(approval.res)
            return true
          }
        }
      )
    )
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
      let account_name = this._getLocalData().cocosAccount.accounts
      sendResponse(account_name)
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

  Params() {}

  static getBCX() {
    return newBcx.GetNewBCX()
  }
}
/* eslint-disable no-new */
new Background()
