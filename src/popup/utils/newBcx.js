import BCX from 'bcx-api'
// import BCX from '../../lib/bcx-api'

// import '../../lib/bcx.min'

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
    let choose_node = Storage.get('choose_node')
    console.log('choose_node', choose_node)
    console.log('hhh', nodes);
    if (!nodes || nodes.length < 1) {
      nodes = [{
        chainId: "6057d856c398875cac2650fe33caef3d5f6b403d184c5154abbff526ec1143c4",
        coreAsset: 'COCOS',
        faucetUrl: 'https://faucet.cocosbcx.net',
        // name: 'Cocos - China - Beijing',
        name: 'Main',
        type: '1',
        ws: 'wss://api.cocosbcx.net',
        choose: true,
      }]
      // 测试环境 节点
      // [{
      //   chainId: "1ae3653a3105800f5722c5bda2b55530d0e9e8654314e2f3dc6d2b010da641c5",
      //   coreAsset: "COCOS",
      //   faucetUrl: "http://test-faucet.cocosbcx.net",
      //   // isForce: false,
      //   name: "Test",
      //   type: "0",
      //   ws: "ws://test.cocosbcx.net",
      //     choose: true,
      // }]
    }
    let Node;
    let choose = Storage.get('choose_node')
    nodes.map(item => {
      choose && choose.ws === item.ws ? (Node = item) : (Node = nodes[0])
    })
    console.log('------',Node);
    
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
