import { Injectable } from '@angular/core';
import { Product } from './product.service';

export interface CartItem {
  product: Product;
  quantity: number;
}

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItems: CartItem[] = [];

  addToCart(product: Product): void {
    const existingItem = this.cartItems.find(item => item.product.name === product.name);
    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
  }

  getCartItems(): CartItem[] {
    return [...this.cartItems];
  }

  updateQuantity(productName: string, quantity: number): void {
    const item = this.cartItems.find(item => item.product.name === productName);
    if (item) {
      if (quantity <= 0) {
        this.cartItems = this.cartItems.filter(item => item.product.name !== productName);
      } else {
        item.quantity = quantity;
      }
    }
  }

  clearCart(): void {
    this.cartItems = [];
  }

  getTotal(): number {
    return this.cartItems.reduce((total, item) => total + (item.product.price * item.quantity), 0);
  }

  // ✅ **Newly Added Method**
  removeFromCart(productName: string): void {
    this.cartItems = this.cartItems.filter(item => item.product.name !== productName);
  }
}
