import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IMovie } from '../interfaces/IMovie';
import { IOrderRows } from '../interfaces/IOrderRows';
import { IOrder } from '../interfaces/IOrder';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  cart: IMovie[];
  order: IOrder;
  orderRows: IOrderRows[] = [];
  totalPrice: number;
  customer = this.fb.group({
    companyId: ['', Validators.required],
    createdBy: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  mapItems() {

    for(let i = 0; i < this.cart.length; i++){
      let amount: number = 1;
      let newItem: IOrderRows = { ProductId: this.cart[i].id , Amount: amount }
      this.orderRows.push(newItem);

      for(let j = i + 1; j < this.cart.length; j++){
        if(this.orderRows[i].ProductId === this.cart[j].id){
          this.cart.splice(j, 1);
          j--
          this.orderRows[i].Amount += 1;
        }
      }
    }

    console.log(this.orderRows);

  }

  createOrder(){
    this.order = {
      "id": 0,
      "companyId": 13,
      "created": "0001-01-01T00:00:00",
      "createdBy": this.customer.controls['createdBy'].value,
      "paymentMethod": null,
      "totalPrice": this.totalPrice,
      "status": 0,
      "orderRows": this.orderRows
    }
  }

  submitOrder(){
    this.mapItems();
    this.createOrder();
    console.log(this.totalPrice);
  }

}
