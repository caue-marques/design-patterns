import { ShoppingOrder } from './shopping-order/ShoppingOrder'

const order = new ShoppingOrder()
order.approvePayment()
order.waitPayment()
order.shipOrder()
order.rejectPayment()
order.approvePayment()
order.waitPayment()
order.approvePayment()
order.shipOrder()
