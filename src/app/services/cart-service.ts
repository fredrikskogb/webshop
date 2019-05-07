import { Injectable } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  movie: Observable<IMovie[]>;
  private subject = new Subject<any>();

  constructor() { }

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

  getCart(){
     return this.subject.asObservable();
  }
}
