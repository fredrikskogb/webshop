import { Injectable } from '@angular/core';
import { IDataService } from '../interfaces/IDataService';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IMovie } from '../interfaces/IMovie';
import { IOrder } from '../interfaces/IOrder';


@Injectable({
  providedIn: 'root'
})

export class DataService implements IDataService {
  constructor(private http: HttpClient) { }

  getData(): Observable<IMovie[]> {
    return this.http.get<IMovie[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/products');
  }

  getMovie(i: number): Observable<IMovie> {
    return this.http.get<IMovie>('https://medieinstitutet-wie-products.azurewebsites.net/api/products/' + i);
  }

  getOrder(): Observable<IOrder[]> {
    return this.http.get<IOrder[]>('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/?companyId=13');
  }

  deleteOrder(id: number){
    return this.http.delete('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/' + id);
  }

  setOrder(order: IOrder){
    return this.http.post('https://medieinstitutet-wie-products.azurewebsites.net/api/orders/', order);
  }

}
