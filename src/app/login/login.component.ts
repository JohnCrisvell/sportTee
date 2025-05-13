import { Component } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onLogin() {
    // Retrieve the stored users array from localStorage
    const storedUsers = localStorage.getItem('users');

    if (storedUsers) {
      const users = JSON.parse(storedUsers);

      // Find a user whose email and password match
      const matchedUser = users.find(
        (user: any) => user.email === this.email && user.password === this.password
      );

      if (matchedUser) {
        // Extract firstName and lastName for the welcome message
        const firstName = matchedUser.firstName || 'User';
        const lastName = matchedUser.lastName || '';
        console.log(`WELCOME ${firstName.toUpperCase()}, ${lastName.toUpperCase()}`);

        // Store the current user's email in localStorage for use in other components
        localStorage.setItem('currentUser', this.email);

        alert('Login successful!');
        this.router.navigate(['/dashboard']);
      } else {
        alert('Invalid credentials, please try again.');
      }
    } else {
      alert('No users found. Please register first.');
    }
  }
}