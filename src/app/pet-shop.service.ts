import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PetShopService {
  private products = [
    {
      id: 1,
      name: 'Premium Dog Food',
      description: 'Healthy and nutritious dry food for adult dogs.',
      price: 850,
      image: 'https://images.unsplash.com/photo-1589923188900-85dae523342b?w=500'
    },
    {
      id: 2,
      name: 'Cat Scratching Post',
      description: 'Durable scratching post to keep cats active.',
      price: 650,
      image: 'https://images.unsplash.com/photo-1511044568932-338cba0ad803?w=500'
    },
    {
      id: 3,
      name: 'Rubber Dog Ball',
      description: 'Fun and durable chew toy for playful dogs.',
      price: 250,
      image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=500'
    },
    {
      id: 4,
      name: 'Pet Bed',
      description: 'Soft and comfortable bed for cats and dogs.',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1560743641-3914f2c45636?w=500'
    },
    {
      id: 5,
      name: 'Adjustable Pet Collar',
      description: 'Comfortable collar suitable for everyday use.',
      price: 300,
      image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?w=500'
    },
    {
      id: 6,
      name: 'Pet Treats',
      description: 'Tasty reward treats for training and snacks.',
      price: 180,
      image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=500'
    }
  ];

  private cart: any[] = [];

  getProducts() {
    return this.products;
  }

  getCart() {
    return this.cart;
  }

  addToCart(product: any): void {
    this.cart.push(product);
  }

  removeFromCart(product: any): void {
    const index = this.cart.indexOf(product);

    if (index > -1) {
      this.cart.splice(index, 1);
    }
  }

  clearCart(): void {
    this.cart = [];
  }

  getTotal(): number {
    return this.cart.reduce(
      (total, item) => total + item.price,
      0
    );
  }
}