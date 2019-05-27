import { Injectable } from '@angular/core';
import { IDataService } from '../interfaces/IDataService';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';
import { IOrder } from '../interfaces/IOrder';
import { catchError } from 'rxjs/operators' ;
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class DataService implements IDataService {
  constructor(private http: HttpClient, private router: Router) { }

  getData(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products')
    .pipe(catchError(this.errorHandler));
  }

  getMovie(i: number): Observable<IMovie> {
    return this.http.get<IMovie>('https://medieinstitutet-wie-products.azurewebsites.net/api/products/' + i)
    .pipe(catchError(this.errorHandler));
  }

  getOrder(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/?companyId=13')
    .pipe(catchError(this.errorHandler));
  }

  deleteOrder(id: number){
    return this.http.delete('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/' + id)
    .pipe(catchError(this.errorHandler));
  }

  setOrder(order: IOrder){
    return this.http.post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/', order)
    .pipe(catchError(this.errorHandler))
  }
  
  errorHandler(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      setTimeout(() => this.router.navigate(['**']));

      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      setTimeout(() => this.router.navigate(['**']));

      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message

    return throwError(
      'Something bad happened; please try again later.');
  }

}
