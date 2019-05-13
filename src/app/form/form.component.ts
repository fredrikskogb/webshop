import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IMovie } from '../interfaces/IMovie';
import { IOrderRows } from '../interfaces/IOrderRows';
import { CartService } from '../services/cart-service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  cart: IMovie[];

  orderRows: IOrderRows[] = [];

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.cart = JSON.parse(localStorage.getItem('cart'));
  }

  order = this.fb.group({
    name: ['', Validators.required],
    type: ['', Validators.required]
  });

  submitOrder(){
    this.mapItems();

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

}
