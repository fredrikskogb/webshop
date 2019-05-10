import { Injectable } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private subject = new Subject<any>();

  constructor() { 
    if(!localStorage.hasOwnProperty('cart')){
      localStorage.setItem('cart', JSON.stringify([]));
    }
  }

  addToCart(movie: IMovie){
    if(localStorage.getItem('cart')){
      let cart = JSON.parse(localStorage.getItem('cart'));
      let newItem = cart.concat(movie);
      localStorage.setItem('cart', JSON.stringify(newItem));
    }else{
      localStorage.setItem('cart', JSON.stringify([movie]));
    }
    this.subject.next(movie);
  }

  updateCart(movie: IMovie[]) {
    localStorage.setItem('cart', JSON.stringify(movie));
    this.subject.next(movie);
  }

  getCart(){
     return this.subject.asObservable();
  }
}
