import { Component, OnInit } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  cart: IMovie[] = [];

  addedToCart = this.cart.length;

  ngOnInit() {
    let cart = JSON.parse(localStorage.getItem('cart'));
    if(cart){
      if(cart instanceof Array){
        let updatedCart = this.cart.concat(cart);
        this.cart = updatedCart;
      }else{
        this.cart.push(cart);
      }
    }
  }

  cartIsSet(){
    return this.cart.length > 0;
  }


}
