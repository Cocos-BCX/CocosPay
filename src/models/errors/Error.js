import * as ErrorTypes from './ErrorTypes'
import * as ErrorCodes from './ErrorCode'

export default class Error {
  constructor(type, message, code = ErrorCodes.LOCKED) {
    this.type = type
    this.message = message
    this.code = code
    this.isError = true
  }
  static locked() {
    return new Error(
      ErrorTypes.LOCKED,
      "The user's CocosPay is locked. They have been notified and should unlock before continuing."
    )
  }
  static maliciousEvent() {
    return new Error(
      ErrorTypes.MALICIOUS,
      'Malicious event discarded.',
      ErrorCodes.FORBIDDEN
    )
  }
  static promptClosedWithoutAction() {
    return new Error(
      ErrorTypes.PROMPT_CLOSED,
      'The user closed the prompt without any action.',
      ErrorCodes.TIMED_OUT
    )
  }
  static signatureError(type, message) {
    return new Error(type, message, ErrorCodes.NO_SIGNATURE)
  }
}
