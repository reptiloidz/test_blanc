import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../ models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private productsInCartSubject = new BehaviorSubject<Product[]>([]);
  productsInCart$ = this.productsInCartSubject.asObservable();

  constructor() { }

  addProduct(product: Product) {
    const currentCart = this.productsInCartSubject.getValue();
    const foundProduct = currentCart.find(p => p.id === product.id);

    if (foundProduct) {
      foundProduct.quantity++;
    } else {
      product.quantity = 1;
      currentCart.push(product);
    }

    this.productsInCartSubject.next(currentCart);
  }

  updateQuantity(productId: number, quantity: number) {
    const currentCart = this.productsInCartSubject.getValue();
    const foundProduct = currentCart.find(p => p.id === productId);

    if (foundProduct && foundProduct.quantity + quantity > 0) {
      foundProduct.quantity += quantity;
    }

    this.productsInCartSubject.next(currentCart);
  }
}