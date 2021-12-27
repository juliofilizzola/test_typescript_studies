import { CartItem } from "../interfaces/cart-item";

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items.reduce((total, next) => total + next.price, 0).toFixed(2);
  }

  totalWithDiscount(discount: number): number {
    return this.total() - this.total() * discount;
  }

  isEmpty(): boolean{
    return this._items.length === 0;
  }
  
  clear() {
    this._items.length = 0;
  }
}