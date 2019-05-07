import { Component, OnInit } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { CartService } from '../services/cart-service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart: IMovie[] = [];
  subscription: Subscription;

  constructor(private cartService: CartService) {
    this.subscription = this.cartService.getCart().subscribe(value => {
        this.cart.push(value);
    });
  }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem("cart"));
  }

  cartIsSet(){
    return this.cart.length > 0;
  }
}