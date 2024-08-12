import { DiscountStrategy } from './DiscountStrategy'
import { ECommerceShoppingCart } from '../EcommerceShoppingCart'

export class DefaultDiscount extends DiscountStrategy {
  getDiscount(shoppingCart: ECommerceShoppingCart): number {
    const total = shoppingCart.getTotal()

    if (total >= 100 && total <= 200) {
      this.discount = 10
    } else if (total >= 200 && total < 300) {
      this.discount = 20
    } else {
      this.discount = 30
    }

    return total - total * (this.discount / 100)
  }
}
