import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { IMovie } from '../interfaces/IMovie';
import { MockDataService } from '../services/mock-data.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [ ReactiveFormsModule, RouterTestingModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const mockMovie: IMovie = new MockDataService().movies[0];
    localStorage.setItem('cart', JSON.stringify([mockMovie]));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create order rows array', () => {
    expect(component.orderRows).toEqual([]);
  });
    
  it('should structure order rows', () => { 
    component.mapItems();
    expect(component.orderRows).toEqual([{ ProductId: 76 , Amount: 1 }]);
    localStorage.removeItem('cart');
  });

  it('reset values on order submit', () => {
    component.submitOrder();
    expect(component.orderRows).toEqual([]);
    expect(component.cart).toEqual([]);
    expect(component.totalPrice).toEqual(0);
  });

});
