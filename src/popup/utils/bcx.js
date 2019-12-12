let Background = chrome.extension.getBackgroundPage().background.default;
let NewBCX = Background.getBCX();
export default class BCXWS {

  static getBCXWithState(){
    return NewBCX
  }
}
