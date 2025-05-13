import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  address: string = '';
  cartItems: { product: any; quantity: number }[] = [];
  total: number = 0;
  showPaymentForm: boolean = false;
  isProcessing: boolean = false;
  selectedPaymentMethod: string = 'visa'; // Default to Visa

  constructor(private router: Router, private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }

  proceedToPayment(): void {
    this.showPaymentForm = true;
  }

  closePaymentForm(): void {
    this.showPaymentForm = false;
  }

  confirmPayment(): void {
    this.isProcessing = true;
    console.log('Payment confirmed with method:', this.selectedPaymentMethod);

    // Generate order details
    const orderDetails = {
      orderNumber: Math.floor(Math.random() * 1000000).toString(), // Simple random order number
      date: new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }), // Format: "May 12, 2025"
      total: this.total + 50, // Include shipping fee as per the HTML
      address: this.address, // Pass the address from the input field
      paymentMethod: this.selectedPaymentMethod, // Pass the selected payment method
    };

    setTimeout(() => {
      alert('Payment successful! Order placed.');
      this.cartService.clearCart();
      this.isProcessing = false;
      this.showPaymentForm = false;
      this.router.navigate(['/order-confirmation'], {
        state: orderDetails,
      });
    }, 2000);
  }

  deleteItem(productName: string): void {
    this.cartService.removeFromCart(productName);
    this.cartItems = this.cartService.getCartItems();
    this.total = this.cartService.getTotal();
  }

  incrementQuantity(productName: string): void {
    const item = this.cartItems.find(item => item.product.name === productName);
    if (item) {
      const newQuantity = item.quantity + 1;
      this.cartService.updateQuantity(productName, newQuantity);
      this.cartItems = this.cartService.getCartItems();
      this.total = this.cartService.getTotal();
    }
  }

  decrementQuantity(productName: string): void {
    const item = this.cartItems.find(item => item.product.name === productName);
    if (item) {
      const newQuantity = item.quantity - 1;
      this.cartService.updateQuantity(productName, newQuantity);
      this.cartItems = this.cartService.getCartItems();
      this.total = this.cartService.getTotal();
    }
  }

  navigateToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  navigateTo(page: string): void {
    this.router.navigate([`/${page}`]);
  }
}