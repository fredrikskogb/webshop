import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { CheckoutComponent } from './checkout.component';
import { MockDataService } from '../services/mock-data.service';
import { IMovie } from '../interfaces/IMovie';
import { FormComponent } from '../form/form.component';


describe('FormComponent', () => {
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule, HttpClientModule],
      declarations: [ FormComponent, CheckoutComponent ]
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

  it('should get total price', () => {
    const mockMovie: IMovie = new MockDataService().movies[0];
    expect(component.totalPrice).toEqual(199);
  });

  describe('duplicateToOne()', () => {

    it('should remove duplicate and increase amount', () => {
      const mockMovie: IMovie = new MockDataService().movies[0];
      component.cart.push(mockMovie);
      component.duplicateToOne();
      expect(component.mappedCart.length).toEqual(1);
      expect(component.mappedCart[0].amount).toEqual(2);
    });

  });

  describe('removeItem()', () => {

    beforeEach(() => {
      const mockMovie: IMovie = new MockDataService().movies[0];
      localStorage.setItem('cart', JSON.stringify([mockMovie]));
    });

    it('should remove clicked item from cart', () => {
      const length = component.cart.length;
      expect(component.cart.length).toBe(length);
      component.removeItem(0, 76);
      expect(component.cart.length).toBe(length-1);
    });

    it('should remove clicked item from local storage', () => {
      const length = component.cart.length;
      expect(component.cart.length).toBe(length);
      component.removeItem(0, 76);
      expect(JSON.parse(localStorage.getItem('cart')).length).toBe(length-1);
    });

  });


});
