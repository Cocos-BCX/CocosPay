import TronWeb from 'tronweb'
import BCX from 'bcxjs-api';
import store from '../store'

export function NewTronWeb() {
  const network = store.state.currentNetwork
  const tronWeb = new TronWeb(network.fullNodeUrl, network.solidityUrl, network.eventGridUrl)
  tronWeb.defaultAccount = store.state.currentAccount.address
  return tronWeb
}

export function NewBCX() {
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

export const createAccountName = () => {
  return `Account${store.state.wallet.accountNo}`
}
