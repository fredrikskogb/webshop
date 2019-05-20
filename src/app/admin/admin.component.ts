import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IOrder } from '../interfaces/IOrder';
import { IMovie } from '../interfaces/IMovie';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  order: any;
  movies: IMovie[];
  orderPresentation: any = [];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getOrder().subscribe((data) => { this.order = data; });
    this.service.getData().subscribe((data) => { this.movies = data; });
  }

  mapItems(): IMovie[]{
    for(let i = 0; i < this.order.length; i++){
      for( let j = 0; j < this.order[i].orderRows.length; j++){
        for(let k = 0; k < this.movies.length; k++){
          if(this.order[i].orderRows[j].productId === this.movies[k].id){
            this.movies[k]["amount"] = this.order[i].orderRows[j].amount;
            this.orderPresentation.push(this.movies[k]);
          }
        }
      }
    }
    return;
  }

  deleteOrder(id: number){

  }

}
