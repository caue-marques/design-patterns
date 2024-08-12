import { EnterpriseCustomerVehicleFactory } from './factories/EnterpriseCustomerVehicleFactory'
import { IndividualCustomerVehicleFactory } from './factories/IndividualCustomerVehicleFactory'

const enterpriseFactory = new EnterpriseCustomerVehicleFactory()
const individualFactory = new IndividualCustomerVehicleFactory()

const person1 = enterpriseFactory.createCustomer('Cauê')
const person2 = individualFactory.createCustomer('Marques')

const vehicle1 = enterpriseFactory.createVehicle('Uno', person1)
const vehicle2 = individualFactory.createVehicle('Celta', person2)

vehicle1.pickUp()
vehicle2.pickUp()
