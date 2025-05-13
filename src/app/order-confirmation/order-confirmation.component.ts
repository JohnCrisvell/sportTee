import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-order-confirmation',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css'],
})
export class OrderConfirmationComponent implements OnInit {
  orderDetails: { orderNumber: string; date: string; total: number; address: string; paymentMethod: string } | null = null;
  fullName: string | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Retrieve order details from route state
    this.orderDetails = history.state as { orderNumber: string; date: string; total: number; address: string; paymentMethod: string } || null;
    console.log('OrderConfirmation initialized, orderDetails:', this.orderDetails);

    // Retrieve the current user's email
    const currentUserEmail = localStorage.getItem('currentUser');
    if (currentUserEmail) {
      // Retrieve the users array from localStorage
      const storedUsers = localStorage.getItem('users');
      if (storedUsers) {
        const users = JSON.parse(storedUsers);
        const currentUser = users.find((user: any) => user.email === currentUserEmail);
        
        if (currentUser) {
          const firstName = currentUser.firstName || '';
          const lastName = currentUser.lastName || '';
          
          // Combine first name and last name
          if (firstName && lastName) {
            this.fullName = `${firstName} ${lastName}`;
          } else if (firstName) {
            this.fullName = firstName;
          } else if (lastName) {
            this.fullName = lastName;
          } else {
            this.fullName = null;
          }
          console.log('Combined fullName:', this.fullName);
        } else {
          console.log('Current user not found in users array');
          this.fullName = null;
        }
      } else {
        console.log('No users array found in localStorage');
        this.fullName = null;
      }
    } else {
      console.log('No current user email found in localStorage');
      this.fullName = null;
    }

    // Log all order details as they appear in the template
    console.log('--- Order Confirmation Details ---');
    console.log('Full Name:', this.fullName || 'N/A');
    console.log('Delivery Address:', this.orderDetails?.address || 'N/A');
    console.log('Order ID:', this.orderDetails?.orderNumber || 'N/A');
    console.log('Order Date:', this.orderDetails?.date || 'N/A');
    console.log('Payment Method:', this.getPaymentMethodLabel());
    console.log('Total:', this.orderDetails ? `₱${this.orderDetails.total}` : 'N/A');
    console.log('---------------------------------');

    if (!this.orderDetails) {
      console.warn('No orderDetails found in history.state');
      // Optionally redirect or set default values
      // this.router.navigate(['/dashboard']);
    }
  }

  // Map payment method value to user-friendly label
  getPaymentMethodLabel(): string {
    if (!this.orderDetails) return 'N/A';
    const method = this.orderDetails.paymentMethod.toLowerCase();
    const paymentLabels: { [key: string]: string } = {
      visa: 'Visa',
      bdo: 'BDO',
      gcash: 'GCash',
      cod: 'Cash on Delivery',
    };
    return paymentLabels[method] || method;
  }

  // Updated with animation state
  continueShopping(): void {
    console.log('Navigating to Dashboard with animation...');
    this.router.navigate(['/dashboard'], { state: { animation: 'Dashboard' } });
  }
}