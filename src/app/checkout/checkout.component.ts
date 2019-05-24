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

  removeItem(i, id){
    let index = this.cart.findIndex(function(o){
      return o.id === id;
    })
    if (index !== -1){
      this.cart.splice(index, 1);
      this.cartService.updateCart(this.cart);
    } 

    const initPrice = this.mappedCart[i].price / this.mappedCart[i].amount;
    this.mappedCart[i].amount -= 1;
    this.mappedCart[i].price = initPrice * this.mappedCart[i].amount; 
    if(this.mappedCart[i].amount === 0){
      this.mappedCart.splice(i, 1);
    }
  }

}