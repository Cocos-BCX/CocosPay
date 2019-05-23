export default class ExtensionProvider {
  // constructor (...args) {
  //   super(...args)

  //   this.ready = false
  //   this.queue = []
  // }

  // setURL (url) {
  //   this.instance = Axios.create({
  //     baseURL: url,
  //     timeout: 30000
  //   })

  //   this.ready = true

  //   while (this.queue.length) {
  //     const {
  //       args,
  //       resolve,
  //       reject
  //     } = this.queue.shift()

  //     this.request(...args)
  //       .then(resolve)
  //       .catch(reject)
  //       .then(() => (
  //         console.info(`Request to ${args[0]} completed`)
  //       ))
  //   }
  // }

  // request (url, payload = {}, method = 'get') {
  //   if (!this.ready) {
  //     return new Promise((resolve, reject) => {
  //       this.queue.push({
  //         args: [url, payload, method],
  //         resolve,
  //         reject
  //       })
  //     })
  //   }

  //   return super.request(url, payload, method).then(res => {
  //     // Some transaction calls have a nested transaction property
  //     const obj = res.hasOwnProperty('transaction') ? res.transaction : res
  //     Object.defineProperty(obj, '__payload__', {
  //       writable: false,
  //       enumerable: false,
  //       configurable: false,
  //       value: payload
  //     })

  //     return res
  //   }).catch(err => Promise.reject(err))
  // }
}
