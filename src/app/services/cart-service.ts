import { Injectable } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private subject = new Subject<any>();

  // Set empty array to local storage 'cart' if cart is empty
  constructor() {
    if (!localStorage.hasOwnProperty('cart')) {
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }

  // Push new movie to local storage 'cart'. Update displayed amount of products on cart image in the header.
  // Used from single-movie-presentation.ts
  addToCart(movie: IMovie) {
    if (localStorage.getItem('cart')) {
      const cart = JSON.parse(localStorage.getItem('cart'));
      const newItem = cart.concat(movie);
      localStorage.setItem('cart', JSON.stringify(newItem));
    } else {
      localStorage.setItem('cart', JSON.stringify([movie]));
    }
    this.subject.next(movie);
  }

  // Update local storage 'cart' and update displayed amount of products on cart image in the header.
  // Used from checkout-component-ts "removeItem()"
  updateCart(movie: IMovie[]) {
    localStorage.setItem('cart', JSON.stringify(movie));
    this.subject.next(movie);
  }

  // Used in HeaderComponent OnInit
  getCart() {
     return this.subject.asObservable();
  }
}
