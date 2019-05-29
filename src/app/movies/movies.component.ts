import { Component, OnInit } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { DataService } from '../services/data.service';
import { ICategory } from '../interfaces/ICategory';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  movies: any; // Any is needed or it will bug when searched
  categories: ICategory[];
  subscription: Subscription;

  constructor(private service: DataService, private router: Router) { }

  // Get all movies. Send to movie-presentation-component.ts with @Input
  ngOnInit() {
    this.getMovies();

    this.subscription = this.service.getSearchedProduct().subscribe(data => {
      if (data) {
        this.movies = data;
      }
    });
  }

  getMovies(){
    this.service.getData().subscribe(
      (data) => { this.movies = data; 
      this.service.getCategory().subscribe(
        (data) => { this.categories = data;
        this.addCategory();
      });
    });
  }

  // Adds category name by comparing category ID with movies.productCategory ID
  addCategory() {
    for(let i = 0; i < this.movies.length; i++){
      for(let j = 0; j < this.movies[i].productCategory.length; j++){
        for(let k = 0; k < this.categories.length; k++){
          if(this.movies[i].productCategory[j].categoryId === this.categories[k].id){
            this.movies[i].productCategory[j].category = this.categories[k].name;
          }
        }
      }
    }
  }

}