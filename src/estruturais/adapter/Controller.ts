import { IEmailValidator } from './interfaces/IEmailValidator'

export class Controller {
  constructor(private emailValidator: IEmailValidator) {}

  public validateEmail = (email: string) => {
    return this.emailValidator.isEmail(email)
  }
}
