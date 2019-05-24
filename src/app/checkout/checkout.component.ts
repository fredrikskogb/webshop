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
  mappedCart: any[];
  cartPresentation: any[] = []

  constructor(private cartService: CartService) { }



  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart')); 
    this.duplicateToOne();
  }

  duplicateToOne(){
    this.mappedCart = this.cart.map(function(item) {
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        amount: 1
      }
    }).reduce(function(acc, item) {
      const double = acc.find(function(check) {
        return (item.id === check.id);
      });
      if (double) {
        const initPrice = double.price / double.amount;
        double.amount = double.amount += 1;
        double.price += initPrice;
      }
      else {
        acc.push(item);
      }
      return acc;
    }, []);
  }

  // Checks if object "a" has equal object properties as object "b"
  equalObjects(a, b) {

    const aProps = Object.getOwnPropertyNames(a);
    const bProps = Object.getOwnPropertyNames(b);

    if(aProps.length != bProps.length) {
      return false;
    }

    for(let i = 0; i < aProps.length; i++) {
      const propName = aProps[i];

      if(a[propName] !== b[propName]) {
        return false;
      }
    }

    return true;
  }


  removeItem(i){
    this.cart.splice(i, 1);
    this.cartService.updateCart(this.cart);
  }

}