import { BicycleFactory } from './factories/BicycleFactory'
import { CarFactory } from './factories/CarFactory'
import { VehicleFactory } from './factories/VehicleFactory'

const carFactory: VehicleFactory = new CarFactory()
const car = carFactory.createProduct('Fusca')

car.pickUp('Cauê')

const bicycleFactory: VehicleFactory = new BicycleFactory()
const bike = bicycleFactory.createProduct('Caloi')

bike.pickUp('Teste')
