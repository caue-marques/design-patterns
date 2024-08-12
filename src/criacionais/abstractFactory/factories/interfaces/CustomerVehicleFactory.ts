import { Customer } from '../../products/interfaces/Customer'
import { Vehicle } from '../../products/interfaces/Vehicle'

export interface CustomerVehicleFactory {
  createCustomer(customerName: string): Customer
  createVehicle(vehicleName: string, customer: Customer): Vehicle
}
