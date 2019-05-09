import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckoutComponent } from './checkout.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MockDataService } from '../services/mock-data.service';
import { IMovie } from '../interfaces/IMovie';

describe('FormComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ CheckoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const mockMovie: IMovie = new MockDataService().movies[0];
    localStorage.setItem('cart', JSON.stringify([mockMovie]));
    fixture = TestBed.createComponent(CheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get items from local storage', () => {
    const mockMovie: IMovie = new MockDataService().movies[0];
    expect(component.cart).toEqual([mockMovie]);
    localStorage.removeItem('cart');
  });

  describe('removeItem()', () => {
    beforeEach(() => {
      const mockMovie: IMovie = new MockDataService().movies[0];
      localStorage.setItem('cart', JSON.stringify([mockMovie]));
      fixture = TestBed.createComponent(CheckoutComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
    it('should remove clicked item from cart', () => {
      const length = component.cart.length;
      expect(component.cart.length).toBe(length);
      component.removeItem(0);
      expect(component.cart.length).toBe(length-1);
    });

    it('should remove clicked item from local storage', () => {
      const length = component.cart.length;
      expect(component.cart.length).toBe(length);
      component.removeItem(0);
      expect(JSON.parse(localStorage.getItem('cart')).length).toBe(length-1);
    });
  });


});
