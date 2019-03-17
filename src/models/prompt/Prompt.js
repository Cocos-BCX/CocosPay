import * as PromptTypes from './PromptTypes'

export default class Prompt {
  constructor(type = '', domain = '', data = {}, responder = null) {
    this.type = type
    this.domain = domain
    this.data = data
    this.responder = responder
  }
  static placeholder() {
    return new Prompt()
  }
  static fromJson(json) {
    return Object.assign(this.placeholder(), json)
  }
  routeName() {
    return `prompt_${this.type}`
  }
  static isLocked() {
    return new Prompt(PromptTypes.UNLOCK, '', {}, () => {})
  }
}
