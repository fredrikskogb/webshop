import { TestBed } from '@angular/core/testing';
import { MockDataService } from './mock-data.service';
import { CartService } from './cart.service';
import { IMovie } from '../interfaces/IMovie';

const configModule = () => TestBed.configureTestingModule({});

describe('CartService', () => {

  beforeEach(configModule);
  
  it('should be created', () => {
    const service: CartService = TestBed.get(CartService);
    expect(service).toBeTruthy();
  });

  
  describe('Initialization of cart data state', () => {   
    
    it('should return false if cart already exists in localStorage', () => {
      const service: CartService = TestBed.get(CartService);
      localStorage.setItem('cart', JSON.stringify([]));
      expect(service.initCart()).toBeFalsy();
      localStorage.removeItem('cart');
    });
    

    it('should return true if cart does not exist in localStorage', () => {
      const service: CartService = TestBed.get(CartService);
      expect(service.initCart()).toBeTruthy();
      localStorage.removeItem('cart');  
    });

    it('should add empty array to localStorage if cart item does not exist', () => {
      const service: CartService = TestBed.get(CartService);
      service.initCart();
      expect(service.cart).toEqual([]); 
    });

    describe("Add to cart", () => {

      it("should add new item to cart array", () => {
        const service: CartService = TestBed.get(CartService);
        const mockMovie: IMovie = new MockDataService().movies[0];
        service.addToCart(mockMovie);
        const movieWasAdded: any = service.cart.find(movie => movie === mockMovie);
        expect(movieWasAdded).toBeTruthy();
      });

      it("should execute updateCart and update localStorage", () => {
      });
      
    });

  });

});
