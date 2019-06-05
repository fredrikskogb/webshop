import { Injectable } from '@angular/core';
import { IDataService } from '../interfaces/IDataService';
import { IMovie } from '../interfaces/IMovie';
import { Observable, of } from 'rxjs';
import { IOrder } from '../interfaces/IOrder';
import { ICategory } from '../interfaces/ICategory';

@Injectable({
  providedIn: 'root'
})
export class MockDataService implements IDataService {

  constructor() { }

  movies: IMovie[] =
  [
    {
      id: 76,
      name: 'The Dark Knight',
      description: 'otham, t psychological and physical tests of his ability to fight injustice',
      price: 199,
      imageUrl: 'https://images-na.ssl-images-amazon.com/images/I/51k98elC6mL.jpg',
      year: 2008,
      added: '2016-01-05T00:00:00',
      productCategory: [{categoryId: 5, category: null}, {categoryId: 6, category: null}]
    },
    {
      id: 77,
      name: 'Pulp fiction',
      description: 'sical tests of his ability to fight injustice',
      price: 799,
      imageUrl: 'https://static.posters.cz/image/750webp/1288.webp',
      year: 2008,
      added: '2016-01-05T00:00:00',
      productCategory: [{categoryId: 5, category: null}, {categoryId: 6, category: null}]
    }
  ];

  order: IOrder[] =
  [
    {
      id: 1,
      companyId: 13,
      created: '2016-01-05T00:00:00',
      createdBy: null,
      paymentMethod: null,
      totalPrice: 100,
      status: 0,
      orderRows:
        [
          {
            productId: 76,
            amount: 1
          }
        ]
    },
    {
      id: 2,
      companyId: 13,
      created: '2016-01-05T00:00:00',
      createdBy: null,
      paymentMethod: null,
      totalPrice: 100,
      status: 0,
      orderRows:
        [
          {
            productId: 77,
            amount: 1
          }
        ]
    }
  ];

  categories: ICategory[] =
  [
    {
      id: 5,
      name: 'Action'
    },
    {
      id: 6,
      name: 'Thriller'
    },
    {
      id: 7,
      name: 'Comedy'
    },
    {
      id: 8,
      name: 'Sci-fi'
    }
  ];

  getData(): Observable<IMovie[]> {
    return of(this.movies);
  }

  getMovie(): Observable<IMovie> {
    return of(this.movies[0]);
  }

  getCategory(): Observable<ICategory[]> {
    return of(this.categories);
  }

  getOrder(): Observable<IOrder[]> {
    return of(this.order);
  }

  search(input): Observable<IMovie[]> {
    return of(this.movies);
  }

  deleteOrder(id: number) {
    for (let i = this.order.length - 1; i >= 0; --i) {
      if (this.order[i].orderRows[0].productId === id) {
        this.order.splice(i, 1);
      }
    }
    return of(this.order);
  }
}
