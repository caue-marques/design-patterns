import { Customer } from '../interfaces/Customer'

export class EntrepriseCustomer implements Customer {
  constructor(private name: string) {}

  getName(): string {
    return this.name
  }
}
