import BCX from 'bcxjs-api';

let bcxNodes = []
export default class NewBCX {

  static _ininBcxNodes() {
    // if ('developmentNewTest' === process.env.NODE_ENV) {
    bcxNodes.push({
      url: "ws://47.93.62.96:8049",
      name: "COCOS3.0节点1"
    })
    // }
    bcxNodes.push({
      url: "ws://39.106.126.54:8049",
      name: "COCOS3.0节点2"
    })
    // bcxNodes.push({
    //   url: 'ws://39.96.33.61:8080',
    //   name: 'COCOS节点2',
    //   ip: '39.96.33.61'
    // })
    // bcxNodes.push({
    //   url: 'ws://39.96.29.40:8050',
    //   name: 'COCOS节点3',
    //   ip: '39.96.29.40'
    // })
    // bcxNodes.push({
    //   url: 'ws://39.106.126.54:8050',
    //   name: 'COCOS节点4',
    //   ip: '39.106.126.54'
    // })
  }

  static GetDefaultNodes() {
    if (bcxNodes.length < 1) {
      this._ininBcxNodes()
    }
    return bcxNodes[0]
  }

  static GetNewBCX() {
    if (bcxNodes.length < 1) {
      this._ininBcxNodes()
    }
    let node = this.GetDefaultNodes()

    let faucetUrl = ''
    if ('developmentNewTest' === process.env.NODE_ENV) {
      faucetUrl = 'http://47.93.62.96:8041'
    } else {
      faucetUrl = 'http://47.93.62.96:8041'
    }
    let NewBCX = new BCX({
      default_ws_node: node.url,
      ws_node_list: [{
        url: node.url,
        name: node.name
      }],
      networks: [{
        core_asset: 'COCOS',
        chain_id: 'b9e7cee4709ddaf08e3b7cba63b71c211c845e37c9bf2b865a7b2a592c8adb28'
      }],
      faucet_url: faucetUrl,
      auto_reconnect: true,
      worker: false
    })
    return NewBCX
  }
}
