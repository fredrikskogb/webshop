import { Component, OnInit } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: IMovie[];

  constructor() { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  removeItem(i){
    this.cart.splice(i, 1);
    localStorage.setItem('cart', JSON.stringify(this.cart))
  }

}
