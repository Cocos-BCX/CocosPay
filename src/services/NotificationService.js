import Error from '../models/errors/Error'
import {
  apis
} from '../lib/BrowserApis'
import InternalMessage from '../messages/InternalMessage'
import * as InternalMessageTypes from '../messages/InternalMessageTypes'
let openWindow = null
export default class NotificationService {
  static async open(notification) {
    if (openWindow) {
      openWindow.close()
      openWindow = null
    }
    const height = 480
    const width = 600
    let middleX = window.screen.availWidth / 2 - (width / 2)
    let middleY = window.screen.availHeight / 2 - (height / 2)

    const getPopup = async () => {
      try {
        const url = apis.runtime.getURL('/pages/prompt.html')
        // Notifications get bound differently depending on browser
        // as Firefox does not support opening windows from background.
        if (typeof browser !== 'undefined') {
          const created = await apis.windows.create({
            url,
            height,
            width,
            type: 'popup'
          })
          // const created = this.createWindows(height, width, url)
          window.notification = notification
          return created
        } else {
          if (win) {
            return null
          }
          const win = window.open(url, 'COCOSPayPrompt', `width=${width},height=${height},resizable=0,top=${middleY},left=${middleX},titlebar=0`)
          win.data = notification
          openWindow = win
          return win
        }
      } catch (e) {
        console.log('notification error', e)
        return null
      }
    }
    // await InternalMessage.widthPayload(InternalMessageTypes.SET_PROMPT, JSON.stringify(notification)).send()
    await new Promise((resolve) => setTimeout(resolve, 600))
    let popup = await getPopup()

    // Handles the user closing the popup without taking any action
    popup.onbeforeunload = () => {
      notification.responder(Error.promptClosedWithoutAction())
      openWindow = null
      return undefined
    }
  }

  static async close() {
    if (typeof browser !== 'undefined') {
      const {
        id: windowId
      } = (await apis.windows.getCurrent())
      apis.windows.remove(windowId)
    } else {
      window.onbeforeunload = () => {}
      window.close()
    }
  }
}
