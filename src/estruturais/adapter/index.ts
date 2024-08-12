import { Controller } from './Controller'
import { EmailValidator } from './interfaces/EmailValidator'

const controller = new Controller(new EmailValidator())

console.log(controller.validateEmail('caue.marques@qualitydigital.global'))
