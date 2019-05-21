import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IMovie } from '../interfaces/IMovie';
import { Router } from '@angular/router';

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

  constructor(private service: DataService, private router: Router) { }

  ngOnInit() {
    this.service.getOrder().subscribe((data) => { this.order = data; });
    this.service.getData().subscribe((data) => { this.movies = data; });
  }

  mapItems(): IMovie[]{
    for(let i = 0; i < this.order.length; i++){
      for( let j = 0; j < this.order[i].orderRows.length; j++){
        for(let k = 0; k < this.movies.length; k++){
          if(this.order[i].orderRows[j].productId === this.movies[k].id){
            let dummy = {};
            dummy["amount"] = this.order[i].orderRows[j].amount;
            dummy["orderId"] = this.order[i]["id"];
            dummy["name"] = this.movies[k].name;
            dummy["year"] = this.movies[k].year;
            dummy["imageUrl"] = this.movies[k].imageUrl;
            dummy["price"] = this.movies[k].price;
            this.orderPresentation.unshift(dummy);
          }
        }
      }
    }
    this.display = !this.display;
    if(this.orderPresentation.length === 0){
      this.router.navigate(['page-not-found']);
    }
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
