import { Product } from "./entities/products";
import { Order } from "./entities/order";

import { ShoppingCart } from "./entities/ShoppingCart";
import { Messaging } from "../services/messaging";
import { Persistency } from "../services/persistency";

const shoppingCart = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();

const order = new Order(shoppingCart, messaging, persistency);

shoppingCart.addItem(new Product('Camiseta', 49.91));
shoppingCart.addItem(new Product('Caderno', 9.9123));
shoppingCart.addItem(new Product('Lápis', 1.59));

console.log(shoppingCart.items);
console.log(shoppingCart.totalWithDiscount(0.5));
console.log(shoppingCart.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);