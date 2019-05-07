import { Component, OnInit } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private service: CartService) { }

  cart: [];

  ngOnInit() {
    this.service.initCart();
    this.cart = this.service.cart;
  }

  cartIsSet(){
    return this.cart.length > 0;
  }


}