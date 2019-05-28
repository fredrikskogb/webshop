import { Component, OnInit } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { DataService } from '../services/data.service';
import { ICategory } from '../interfaces/ICategory';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  movies: IMovie[];
  categories: ICategory[];
  constructor(private service: DataService) { }

  // Get all movies. Send to movie-presentation-component.ts with @Input
  ngOnInit() {
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