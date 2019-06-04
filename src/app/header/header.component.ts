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
  subscription: Subscription;
  searchValue: string;
  suggestions: any = [];

  constructor(private cartService: CartService, private router: Router, private dataService: DataService) {
    this.subscription = this.cartService.getCart().subscribe(value => {
      if(this.router.url === '/checkout'){
        this.cart = JSON.parse(localStorage.getItem('cart'));
        return;
      }
      this.cart.push(value);
    });
  }

  // Show amount of products in chart
  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem("cart"));
  }

  // Check if cart is set to dislplay HTML
  cartIsSet(){
    return this.cart.length > 0;
  }

  // Gives search suggestions to user in a div
  getSuggestions(){
    if(this.searchValue.length > 0){
      this.dataService.search(this.searchValue).subscribe(suggestion => {
        this.suggestions = [];
        for(let i = 0; i < suggestion.length; i++){
          this.suggestions.push(suggestion[i].name);
        }
      });
    }
  }

  // When clicking searchvalue, set parameter to the placeholder/searchValue
  setSearchValue(name){
    this.searchValue = name;
    this.suggestions = [];
  }
  
}