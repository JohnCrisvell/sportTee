import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, data: { animation: 'Home' } },
  { path: 'login', component: LoginComponent, data: { animation: 'Login' } },
  { path: 'register', component: RegisterComponent, data: { animation: 'Register' } },
  { path: 'dashboard', component: DashboardComponent, data: { animation: 'Dashboard' } },
  { path: 'checkout', component: CheckoutComponent, data: { animation: 'Checkout' } },
  { path: 'order-confirmation', component: OrderConfirmationComponent, data: { animation: 'OrderConfirmation' } },
  { path: '**', redirectTo: '' }
];