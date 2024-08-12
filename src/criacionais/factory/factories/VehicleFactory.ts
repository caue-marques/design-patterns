import { Vehicle } from '../vehicle/vehicle'

export abstract class VehicleFactory {
  abstract createProduct(vehicleName: string): Vehicle

  pickUp(customerName: string, vehicleName: string) {
    const car = this.createProduct(vehicleName)
    car.pickUp(customerName)

    return car
  }
}
