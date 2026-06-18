import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetShop } from '../pet-shop.service';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.css']
})
export class ProductCardComponent {
  @Input() product: any;

  constructor(private petShopService: PetShop) {}

  addToCart(): void {
    this.petShopService.addToCart(this.product);
    alert(`${this.product.name} added to cart!`);
  }
}