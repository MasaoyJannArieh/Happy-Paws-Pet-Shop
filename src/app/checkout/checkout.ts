import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PetShopService } from '../pet-shop.service';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './checkout.html',
  styleUrls: ['./checkout.css']
})
export class CheckoutComponent {
  constructor(public petShopService: PetShopService) {}

  get cartItems() {
    return this.petShopService.getCart();
  }

  get total() {
    return this.petShopService.getTotal();
  }

  placeOrder(): void {
    alert('Thank you for shopping at Happy Paws Pet Shop! Your order has been placed.');
    this.petShopService.clearCart();
  }
}