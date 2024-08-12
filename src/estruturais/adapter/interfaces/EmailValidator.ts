import { IEmailValidator } from './IEmailValidator'

export class EmailValidator implements IEmailValidator {
  private emailRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/g

  isEmail(email: string): boolean {
    return !!email.match(this.emailRegex)
  }
}
