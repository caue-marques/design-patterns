import { Customer } from '../interfaces/Customer'
import { Vehicle } from '../interfaces/Vehicle'

export class IndividualCar implements Vehicle {
  constructor(
    private name: string,
    private readonly customer: Customer,
  ) {}
  pickUp(): void {
    console.log(`${this.name} está buscando ${this.customer.getName()}`)
  }
}
