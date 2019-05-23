import Contracts from './contracts'

export default async (Web, contractType = false, parameters = false) => {
  if (!Contracts.hasOwnProperty(contractType)) {
    return {
      error: `Contract type ${contractType} not supported`
    }
  }
  const endpoint = Contracts[contractType]
  return {}
}
