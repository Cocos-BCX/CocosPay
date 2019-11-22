import {
  LocalStream
} from 'extension-streams'

export default class InternalMessage {
  constructor(type = '', payload = '', resolver = '') {
    this.type = type
    this.payload = payload
    this.resolver = resolver
  }
  static placeholder() {
    return new InternalMessage()
  }
  static fromJson(json) {
    return Object.assign(this.placeholder(), json)
  }
  static widthPayload(type, payload) {
    return new InternalMessage(type, payload)
  }
  static widthPayloadAndResolver(type, payload, resolver) {
    return new InternalMessage(type, payload, resolver)
  }
  static signal(type) {
    return new InternalMessage(type)
  }
  send() {
    return LocalStream.send(this)
  }
}
