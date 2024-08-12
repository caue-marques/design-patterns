import { Customer } from '../interfaces/Customer'

export class IndividualCustomer implements Customer {
  constructor(private name: string) {}

  getName(): string {
    return this.name
  }
}
