import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { CartService } from '../services/cart-service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  cart: IMovie[] = [];
  cartSubscription: Subscription;
  searchValue: string;

  constructor(private cartService: CartService, private router: Router) { }

  // Show amount of products in chart
  ngOnInit() {
    this.cartSubscription = this.cartService.getCart().subscribe(value => {
      if(this.router.url === '/checkout'){
        this.cart = JSON.parse(localStorage.getItem('cart'));
        return;
      }
      this.cart.push(value);
    });
  }

  // Check if cart is set to dislplay HTML
  cartIsSet(){
    return this.cart.length > 0;
  }
  
}