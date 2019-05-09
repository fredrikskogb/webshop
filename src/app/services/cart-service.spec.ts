import { TestBed, inject } from '@angular/core/testing';

import { CartService } from './cart-service';
import { IMovie } from '../interfaces/IMovie';
import { MockDataService } from './mock-data.service';

describe('CartService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });

  it('should add movie to cart', () => {
    const service: CartService = TestBed.get(CartService);
    const mockMovie: IMovie = new MockDataService().movies[0];
    service.addToCart(mockMovie);
    expect(JSON.parse(localStorage.getItem("cart"))).toEqual([mockMovie]);
    localStorage.removeItem('cart');
  });

  it('should update movies to cart', () => {
    const service: CartService = TestBed.get(CartService);
    const mockMovie: IMovie = new MockDataService().movies[0];
    expect(JSON.parse(localStorage.getItem("cart"))).toEqual([]);
    service.updateCart([mockMovie]);
    expect(JSON.parse(localStorage.getItem("cart"))).toEqual([mockMovie]);
    localStorage.removeItem('cart');
  });

  it('should get items from cart', inject( [CartService], ( cartService ) => {
    cartService.getCart().subscribe(result => expect(result.length).toBeGreaterThan(0)); 
    
  }));
});
