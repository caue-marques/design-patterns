import { Car } from '../vehicle/Car'
import { Vehicle } from '../vehicle/vehicle'
import { VehicleFactory } from './VehicleFactory'

export class CarFactory extends VehicleFactory {
  createProduct(vehicleName: string): Vehicle {
    return new Car(vehicleName)
  }
}
