/**
 * extensions postMessage to tabs
 */
export default class TabsMessage {
  constructor (type = '', payload = '') {
    this.type = type
    this.payload = payload
  }
  static placeholder () {
    return new TabsMessage()
  }
  static fromJson (json) {
    return Object.assign(this.placeholder(), json)
  }
  static widthPayload (type, payload) {
    return new TabsMessage(type, payload)
  }
  static signal (type) {
    return new TabsMessage(type)
  }
  send () {
    const _super = this
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      var strRegex = '^https?://'
      var re = new RegExp(strRegex)
      if (tabs[0] && re.test(tabs[0].url)) {
        chrome.tabs.sendMessage(tabs[0].id, _super, function (response) {})
      }
    })
  }
}
