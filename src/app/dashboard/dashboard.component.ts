import { Component, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductService, Category, Product } from '../product.service';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterModule, FormsModule, CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  categories: Category[] = [];
  products: Product[] = [];
  filteredProducts: Product[] = [];
  searchTerm: string = '';
  selectedCategory: string | null = null;
  selectedProduct: Product | null = null;
  firstName: string = ''; // Add firstName property

  constructor(private router: Router, private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.products = this.productService.products;
    this.categories = this.productService.getCategories();
    this.filteredProducts = [...this.products];

    // Retrieve user data from localStorage
    const storedUser = localStorage.getItem('users');
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      this.firstName = parsedUser.firstName || ''; // Extract firstName, default to empty string if not found
     
    } else {
      console.log('No user data found in localStorage');
    }
  }

  filterProducts(): void {
    let filtered = this.products;

    if (this.selectedCategory) {
      filtered = filtered.filter(product => product.category === this.selectedCategory);
    }

    if (this.searchTerm.trim()) {
      filtered = filtered.filter(product =>
        product.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }

    this.filteredProducts = filtered;
  }

  filterByCategory(categoryName: string): void {
    this.selectedCategory = this.selectedCategory === categoryName ? null : categoryName;
    this.filterProducts();
  }

  viewProduct(product: Product): void {
    this.selectedProduct = product;
  }

  closeModal(): void {
    this.selectedProduct = null;
  }

  addToCart(product: Product): void {
    this.cartService.addToCart(product);
    console.log(`Added ${product.name} to cart at ₱${product.price}`);
    alert(`${product.name} has been added to your cart!`);
    this.closeModal();
    this.router.navigate(['/checkout']);
  }

  navigateTo(page: string): void {
    console.log(`Navigating to: ${page}`);
    this.router.navigate([`/${page}`]);
  }

  navigateToDashboard(): void {
    if (this.router.url === '/dashboard') {
      console.log('Already on Home Page');
      return;
    }
    console.log('Navigating to Dashboard');
    this.router.navigate(['/dashboard']);
  }
}