import { DiscountStrategy } from './DiscountStrategy'
import { ECommerceShoppingCart } from '../EcommerceShoppingCart'

export default class FivePercentDiscount extends DiscountStrategy {
  getDiscount(shoppingCart: ECommerceShoppingCart): number {
    this.discount = 5

    return shoppingCart.getTotal() - shoppingCart.getTotal() * (5 / 100)
  }
}
