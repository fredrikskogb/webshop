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
  display: boolean = true;
  price: number;
  orderToDelete: number;

  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    this.service.getOrder().subscribe((data) => { this.order = data; });
    this.service.getData().subscribe((data) => { this.movies = data; });
  }

  // Loop through orders, orderRows in orders and movies(compare product id)
  // Set informal values for user in orderPresentation to display in HTML
  mapItems(){
    for(let i = 0; i < this.order.length; i++){
      for( let j = 0; j < this.order[i].orderRows.length; j++){
        for(let k = 0; k < this.movies.length; k++){
          if(this.order[i].orderRows[j].productId === this.movies[k].id){
            if(this.order[i].orderRows[j].amount > 1){
              this.price = this.movies[k].price * this.order[i].orderRows[j].amount;
            }else{
              this.price = this.movies[k].price;
            }

            let ordered = 
              {
                amount: this.order[i].orderRows[j].amount,
                orderId: this.order[i]["id"],
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
    this.display = !this.display;
    if(this.orderPresentation.length === 0){
      this.router.navigate(['**']);
    }
    return;
  }

  deleteOrder(){
    this.service.deleteOrder(this.orderToDelete).subscribe();
    for (let i = this.orderPresentation.length - 1; i >= 0; --i) {
      if (this.orderPresentation[i].orderId === this.orderToDelete) {
        this.orderPresentation.splice(i,1);
      }
    }
  }

  activeOrder(id){
    const modal = document.getElementById("orderToDelete");
    const orderId = document.getElementsByClassName(id);

    this.orderToDelete = id;

    modal.style.display = "block";

    for(let i = 0; i < orderId.length; i++){
      orderId[i].className += ' active';
    }
  }

  resetActiveOrder(){
    const modal = document.getElementById("orderToDelete");
    const activeOrder = document.getElementsByClassName("active");
    modal.removeAttribute("style");

    while (activeOrder[0]) {
      activeOrder[0].classList.remove('active');
    }
  }

}
