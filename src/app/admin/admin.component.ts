import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
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
  display: boolean = true;

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
            this.movies[k]["orderId"] = this.order[i]["id"];
            this.orderPresentation.unshift(this.movies[k]);
          }
        }
      }
    }
    this.display = !this.display;
    return;
  }

  deleteOrder(id: number){
    this.service.deleteOrder(id).subscribe();
    for (let i = this.orderPresentation.length - 1; i >= 0; --i) {
      if (this.orderPresentation[i].orderId === id) {
        this.orderPresentation.splice(i,1);
      }
    }
  }

}
