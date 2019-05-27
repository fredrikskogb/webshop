import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IMovie } from '../interfaces/IMovie';
import { IOrderRows } from '../interfaces/IOrderRows';
import { IOrder } from '../interfaces/IOrder';
import { Router } from '@angular/router';
import { CartService } from '../services/cart-service';
import { DataService } from '../services/data.service';
import * as moment from 'moment';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() cart: IMovie[]; 
  order: IOrder;
  orderRows: IOrderRows[] = [];
  totalPrice: number = 0;
  customer = this.fb.group({
    companyId: ['', Validators.required],
    createdBy: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private router: Router, private cartService: CartService, private dataService: DataService) { }

  ngOnInit() {
  }

  mapItems() {
    for(let i = 0; i < this.cart.length; i++){
      let amount: number = 1;
      let newItem: IOrderRows = { productId: this.cart[i].id , amount: amount }
      this.orderRows.push(newItem);
      this.totalPrice += this.cart[i].price;
      for(let j = i + 1; j < this.cart.length; j++){
        if(this.orderRows[i].productId === this.cart[j].id){
          this.totalPrice += this.cart[j].price;
          this.cart.splice(j, 1);
          j--
          this.orderRows[i].amount += 1;
        }
      }
    }
  }

  createOrder(){
    this.order = {
      id: 0,
      companyId: 13,
      created: moment().add(2, 'hours').format(),
      createdBy: this.customer.controls['createdBy'].value,
      paymentMethod: null,
      totalPrice: this.totalPrice,
      status: 0,
      orderRows: this.orderRows
    }
  }

  submitOrder(){
    this.mapItems();
    this.createOrder();
    this.dataService.setOrder(this.order).subscribe();
    localStorage.setItem('cart', JSON.stringify([]));
    this.cart = [];
    this.cartService.updateCart(this.cart);
    this.orderRows = [];
    this.totalPrice = 0;
    this.router.navigate(['verification']);
  }

}
