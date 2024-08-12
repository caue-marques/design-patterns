import { ECommerceShoppingCart } from '../EcommerceShoppingCart'

export class DiscountStrategy {
  protected discount = 0

  getDiscount(shoppingCart: ECommerceShoppingCart) {
    return shoppingCart.getTotal()
  }
}
