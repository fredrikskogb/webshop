import { Injectable } from '@angular/core';
import { IDataService } from '../interfaces/IDataService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';


@Injectable({
  providedIn: 'root'
})

export class DataService implements IDataService {
  constructor(private http: HttpClient) { }

  movies: Observable<IMovie[]>;

  getData(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }

  getMovie(i: number): Observable<IMovie> {
    return this.http.get<IMovie>('https://medieinstitutet-wie-products.azurewebsites.net/api/products/' + i);
  }
}
