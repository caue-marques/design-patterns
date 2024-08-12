import { DefaultDiscount } from './discounts/DefaultDiscount'
import { ECommerceShoppingCart } from './EcommerceShoppingCart'
import FivePercentDiscount from './discounts/FivePercentDiscount'

const shoppingCart = new ECommerceShoppingCart()

shoppingCart.setDiscountStrategy(new DefaultDiscount())
shoppingCart.setDiscountStrategy(new FivePercentDiscount())
shoppingCart.addProduct({ name: 'Produto 1', price: 50 })
shoppingCart.addProduct({ name: 'Produto 2', price: 50 })

console.log(shoppingCart.getTotal())
console.log(shoppingCart.getTotalWithDiscount())
