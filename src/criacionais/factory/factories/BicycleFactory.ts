import { Bicycle } from '../vehicle/Bicycle'
import { Vehicle } from '../vehicle/vehicle'

import { VehicleFactory } from './VehicleFactory'

export class BicycleFactory extends VehicleFactory {
  createProduct(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName)
  }
}
