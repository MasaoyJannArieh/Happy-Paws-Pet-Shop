import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetShop } from '../pet-shop.service';
import { ProductCardComponent } from '../product-card/product-card.component';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = this.petShop.getProducts();

  constructor(private petShopService: PetShop) {}
}