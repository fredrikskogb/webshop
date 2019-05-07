import { Component, OnInit } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart: IMovie[];

  constructor() { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem("cart"));
  }

  cartIsSet(){
    return this.cart.length > 0;
  }

}
