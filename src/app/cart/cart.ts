import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PetShopService } from '../pet-shop.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './cart.html',
  styleUrls: ['./cart.css']
})
export class CartComponent {
  constructor(public petShopService: PetShopService) {}

  get cartItems() {
    return this.petShopService.getCart();
  }

  get total() {
    return this.petShopService.getTotal();
  }

  removeItem(product: any): void {
    this.petShopService.removeFromCart(product);
  }
}