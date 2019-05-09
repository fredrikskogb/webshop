import { Component, OnInit } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { CartService } from '../services/cart-service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  cart: IMovie[];

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  removeItem(i){
    this.cart.splice(i, 1);
    this.cartService.updateCart(this.cart);
  }

}
