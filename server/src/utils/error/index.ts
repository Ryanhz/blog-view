export interface APIError {
  code: string
  message?: string
}

export class APIError implements APIError {

  code: string
  message?: string
  constructor(code: string, message: string = null) {
    this.code = code
    this.message = message
  }
}
