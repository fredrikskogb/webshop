import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component'
import { IMovie } from '../interfaces/IMovie';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  cart: IMovie[] = [];

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
