import { EntrepriseCustomer } from '../products/customer/EnterpriseCustomer'
import { EnterpriseCar } from '../products/car/EnterpriseCar'
import { CustomerVehicleFactory } from './interfaces/CustomerVehicleFactory'
import { Customer } from '../products/interfaces/Customer'
import { Vehicle } from '../products/interfaces/Vehicle'

export class EnterpriseCustomerVehicleFactory
  implements CustomerVehicleFactory
{
  createCustomer(customerName: string): Customer {
    return new EntrepriseCustomer(customerName)
  }
  createVehicle(vehicleName: string, customer: Customer): Vehicle {
    return new EnterpriseCar(vehicleName, customer)
  }
}
