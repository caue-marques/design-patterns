import { IndividualCar } from '../products/car/IndividualCar'
import { IndividualCustomer } from '../products/customer/IndividualCustomer'
import { Customer } from '../products/interfaces/Customer'
import { Vehicle } from '../products/interfaces/Vehicle'
import { CustomerVehicleFactory } from './interfaces/CustomerVehicleFactory'

export class IndividualCustomerVehicleFactory
  implements CustomerVehicleFactory
{
  createCustomer(customerName: string): Customer {
    return new IndividualCustomer(customerName)
  }
  createVehicle(vehicleName: string, customer: Customer): Vehicle {
    return new IndividualCar(vehicleName, customer)
  }
}
