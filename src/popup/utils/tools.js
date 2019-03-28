import TronWeb from 'tronweb'
import store from '../store'

export function NewTronWeb() {
  const network = store.state.currentNetwork
  const tronWeb = new TronWeb(network.fullNodeUrl, network.solidityUrl, network.eventGridUrl)
  tronWeb.defaultAccount = store.state.currentAccount.address
  return tronWeb
}

export const createAccountName = () => {
  return `Account${store.state.wallet.accountNo}`
}
