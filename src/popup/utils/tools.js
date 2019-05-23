import store from '../store'

export function NewWeb() {

}

export const createAccountName = () => {
  return `Account${store.state.wallet.accountNo}`
}
