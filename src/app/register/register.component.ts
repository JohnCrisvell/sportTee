import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';

  constructor(private router: Router) {}

  onRegister() {
    // Normalize inputs
    this.firstName = this.firstName.trim();
    this.lastName = this.lastName.trim();
    this.email = this.email.trim().toLowerCase();
    this.password = this.password.trim();
    this.confirmPassword = this.confirmPassword.trim();

    // Validate required fields
    if (!this.firstName || !this.lastName) {
      alert('First Name and Last Name are required!');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Retrieve existing users from localStorage
    const storedUsers = localStorage.getItem('users');
    let users = storedUsers ? JSON.parse(storedUsers) : [];

    // Check for duplicate email
    if (users.some((user: any) => user.email === this.email)) {
      alert('A user with this email already exists. Please use a different email or login.');
      return;
    }

    const userData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password,
    };

    // Add the new user to the array
    users.push(userData);
    localStorage.setItem('users', JSON.stringify(users));

    // Log the registration details in a formatted way
    console.log('--- Registration Details ---');
    console.log('First Name:', this.firstName);
    console.log('Last Name:', this.lastName);
    console.log('Email:', this.email);
    console.log('Password:', '[HIDDEN]'); // Avoid logging sensitive data
    console.log('---------------------------');
    console.log('Updated users in localStorage:', users);

    alert('Registered successfully!');
    this.router.navigate(['/login']);
  }
}