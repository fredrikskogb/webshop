import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IMovie } from '../interfaces/IMovie';
import { Router } from '@angular/router';
import { IOrder } from '../interfaces/IOrder';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  order: IOrder[];
  movies: IMovie[];
  orderPresentation: any = [];
  price: number;
  orderToDelete: number;

  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    this.service.getOrder().subscribe((order) => {
      this.order = order;
      this.service.getData().subscribe((data) => {
        this.movies = data;
        this.mapItems();
      });
    });
  }

  // Loop through orders, orderRows in orders and movies(compare product id)
  // Set informal values for user in orderPresentation to display in HTML
  mapItems() {
    for (let i = 0; i < this.order.length; i++) { // First loop orders
      for ( let j = 0; j < this.order[i].orderRows.length; j++) { // Loop products in order
        for (let k = 0; k < this.movies.length; k++) { // Loop available products to compare id with ordered products id
          if (this.order[i].orderRows[j].productId === this.movies[k].id) {
            if (this.order[i].orderRows[j].amount > 1) {
              this.price = this.movies[k].price * this.order[i].orderRows[j].amount;
            } else {
              this.price = this.movies[k].price;
            }

            const ordered = {
                amount: this.order[i].orderRows[j].amount,
                orderId: this.order[i].id,
                name: this.movies[k].name,
                year: this.movies[k].year,
                imageUrl: this.movies[k].imageUrl,
                price: this.price
            };

            this.orderPresentation.unshift(ordered);
          }
        }
      }
    }

    if (this.orderPresentation.length === 0) {
      this.router.navigate(['**']);
    }

    return;
  }

  deleteOrder() {
    this.service.deleteOrder(this.orderToDelete).subscribe();

    for (let i = this.orderPresentation.length - 1; i >= 0; --i) {
      if (this.orderPresentation[i].orderId === this.orderToDelete) {
        this.orderPresentation.splice(i, 1);
      }
    }

    this.resetActiveOrder();
  }

  // Display order about to deleted with green background/highlight
  activeOrder(id) {
    const modal = document.getElementById('orderToDelete');
    const orderId = document.getElementsByClassName(id);
    const activeOrder = document.getElementsByClassName('active');
    this.orderToDelete = id;

    if (activeOrder.length === 0) {
      modal.style.display = 'block';
      for (let i = 0; i < orderId.length; i++) {
        orderId[i].className += ' active';
      }
    } else {
      this.resetActiveOrder();
    }

  }

  // Remove highlighted green background for order that was about to be deleted
  resetActiveOrder() {
    const modal = document.getElementById('orderToDelete');
    const activeOrder = document.getElementsByClassName('active');
    modal.removeAttribute('style');

    while (activeOrder[0]) {
      activeOrder[0].classList.remove('active');
    }

  }

}
