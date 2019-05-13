import { Component, OnInit } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { CartService } from '../services/cart-service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart: IMovie[] = [];
  subscription: Subscription;

  constructor(private cartService: CartService, private router: Router) {
    this.subscription = this.cartService.getCart().subscribe(value => {
      if(this.router.url === '/checkout'){
        this.cart = JSON.parse(localStorage.getItem('cart'));
        return;
      }
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