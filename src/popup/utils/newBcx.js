import BCX from 'bcxjs-api'
import Storage from './storage'
let bcxNodes = []
export default class NewBCX {
  static _ininBcxNodes() {
    // if ('developmentNewTest' === process.env.NODE_ENV) {
    // bcxNodes.push({
    //   url: "ws://47.93.62.96:8049",
    //   name: "COCOS3.0节点1"
    // })
    // }
    // bcxNodes.push({
    //   url: "ws://39.106.126.54:8049",
    //   name: "COCOS3.0节点2"
    // })
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
    let nodes = Storage.get('node')

    if (!nodes || nodes.length < 1) {
      nodes = [{
        chainId: 'b9e7cee4709ddaf08e3b7cba63b71c211c845e37c9bf2b865a7b2a592c8adb28',
        coreAsset: 'COCOS',
        faucetUrl: 'http://47.93.62.96:8041',
        name: 'COCOS Node 1',
        type: '0',
        ws: 'ws://47.93.62.96:8049',
        choose: true,
      }, ]
    }
    let Node;
    let choose = Storage.get('choose_node')
    nodes.map(item => {
      choose && choose.ws === item.ws ? (Node = item) : (Node = nodes[0])
    })

    // if (bcxNodes.length < 1) {
    //   _ininBcxNodes()
    // }
    // let node = GetDefaultNodes()
    let faucetUrl = ''
    if (process.env.NODE_ENV === 'developmentNewTest') {
      faucetUrl = Node.faucetUrl
      // faucetUrl = 'http://47.93.62.96:8041'
      // faucetUrl = 'http://47.93.62.96:4000'
    } else {
      faucetUrl = Node.faucetUrl
      // faucetUrl = 'http://47.93.62.96:4000'
      // faucetUrl = 'http://47.93.62.96:8041'
    }

    let NewBCX = new BCX({
      default_ws_node: Node.ws,
      ws_node_list: [{
        url: Node.ws,
        name: Node.name,
      }, ],
      networks: [{
        core_asset: 'COCOS',
        // chain_id: '53b98adf376459cc29e5672075ed0c0b1672ea7dce42b0b1fe5e021c02bda640',
        // chain_id: '9fc429a48b47447afa5e6618fde46d1a5f7b2266f00ce60866f9fdd92236e137',
        // chain_id: 'b9e7cee4709ddaf08e3b7cba63b71c211c845e37c9bf2b865a7b2a592c8adb28'
        chain_id: Node.chainId,
      }, ],
      faucet_url: faucetUrl,
      auto_reconnect: false,
      worker: false,
    })
    Storage.set('choose_node', Node)
    return NewBCX
  }
}
