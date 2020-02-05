import Storage from "../lib/storage"

const tabsSendMessage = function () {
    return new Promise(function (resolve, reject) {
        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
            // 发送一个copy消息出去
            console.log("tabsSendMessage")
            console.log(tabs[0])
            console.log(tabs[0].id)
            let changeNode = Storage.get("choose_node");
            chrome.tabs.sendMessage(tabs[0].id, {type: "change", content: changeNode}, function (response) {
              // 这里的回调函数接收到了要抓取的值，获取值得操作在下方content-script.js
              // 将值存在background.js的data属性里面。
              // var win = chrome.extension.getBackgroundPage();
              // win.data=response;
            //   console.log(response)
            //   Storage.set("choose_node", changeNode);
            resolve(response)
            });
        });
    })
    
}


export default {
    tabsSendMessage
}