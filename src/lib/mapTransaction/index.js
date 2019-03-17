import Contracts from './contracts'

export default async (tronWeb, contractType = false, parameters = false) => {
  if (!Contracts.hasOwnProperty(contractType)) {
    return {error: `Contract type ${contractType} not supported`}
  }
  const endpoint = Contracts[contractType]
  return {
    mapped: await tronWeb.fullNode.request(endpoint, parameters, 'post')
  }
}
