import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PetShopService } from '../pet-shop.service';
import { ProductCardComponent } from '../product-card/product-card';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, ProductCardComponent],
  templateUrl: './products.html',
  styleUrls: ['./products.css']
})
export class ProductsComponent {
  products: any[] = [];

  constructor(private petShopService: PetShopService) {
    this.products = this.petShopService.getProducts();
  }
}