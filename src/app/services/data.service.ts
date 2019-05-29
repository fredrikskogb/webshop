import { Injectable } from '@angular/core';
import { IDataService } from '../interfaces/IDataService';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError, Subject } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';
import { IOrder } from '../interfaces/IOrder';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ICategory } from '../interfaces/ICategory';

@Injectable({
  providedIn: 'root'
})

export class DataService implements IDataService {
  constructor(private http: HttpClient, private router: Router) { }

  private searchedProduct = new Subject();


  getData(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }

  getMovie(i: number): Observable<IMovie> {
    return this.http.get<IMovie>('https://medieinstitutet-wie-products.azurewebsites.net/api/products/' + i);
  }

  getCategory(): Observable<ICategory[]> {
    return this.http.get<ICategory[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/categories');
  }

  getOrder(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/?companyId=13');
  }

  deleteOrder(id: number): Observable<any>{
    return this.http.delete('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/' + id);
  }

  setOrder(order: IOrder): Observable<IOrder>{
    return this.http.post<IOrder>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/', order)
    .pipe(catchError(this.errorHandler));
  }

  search(input){
    // get product är en observable. ordna den med subsrcribe
    this.http.get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/search?searchText=' + input)
    .subscribe((data) => { this.searchedProduct.next(data) });
  }

  getSearchedProduct(){
    return this.searchedProduct.asObservable();
  }
  
  errorHandler(error: HttpErrorResponse){
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

}
