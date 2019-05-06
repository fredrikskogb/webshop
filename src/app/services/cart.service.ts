import { Injectable } from '@angular/core';
import { OnInit} from '@angular/core';

import { IMovie } from '../interfaces/IMovie';

@Injectable({
  providedIn: 'root'
})

export class CartService implements OnInit {

  cart: IMovie[];

  constructor() { }

  ngOnInit() {

    this.initCart();

  }

  initCart(): boolean {

    if(localStorage.hasOwnProperty("cart")) {
      return false;
    }

    localStorage.setItem("cart", JSON.stringify([]));
    this.updateCart();

    return true;

  }

  updateCart() {

    this.cart = JSON.parse(localStorage.getItem("cart"));

  }

  getCart(): IMovie[] {

    return this.cart;    

  }

  addToCart(movie: IMovie) {

    const cart = [...this.cart, movie];
    this.cart = cart;

    this.updateCart();


  }

}

