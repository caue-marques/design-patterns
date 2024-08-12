import { DiscountStrategy } from './discounts/DiscountStrategy'

export interface IECommerceProduct {
  name: string
  price: number
}

export class ECommerceShoppingCart {
  private products: IECommerceProduct[] = []
  private discountStrategy: DiscountStrategy = new DiscountStrategy()

  addProduct(...products: IECommerceProduct[]) {
    products.map((product) => this.products.push(product))
  }

  getProducts() {
    return this.products
  }

  getTotal() {
    return this.products.reduce((sum, prod) => sum + prod.price, 0)
  }

  getTotalWithDiscount() {
    return this.discountStrategy.getDiscount(this)
  }

  setDiscountStrategy(discount: DiscountStrategy) {
    this.discountStrategy = discount
  }
}
