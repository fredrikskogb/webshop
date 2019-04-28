import { Injectable } from '@angular/core';
import { IDataService } from '../interfaces/IDataService';
import { IMovie } from '../interfaces/IMovie';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IDataService {

  constructor() { }

  movies: IMovie[] = 
  [
    {
      id: 76,
      name: "The Dark Knight",
      description: "otham, the Dark Knight must accept one of the greatest psychological and physical tests of his ability to fight injustice",
      price: 199,
      imageUrl: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SY1000_CR0,0,675,1000_AL_.jpg",
      year: 2008,
      added: "2016-01-05T00:00:00",
      productCategory: [{categoryId:5,category:null}, {categoryId:6,category:null}]
    }
  ];

  getData(){
    return of(this.movies);
  }
}
