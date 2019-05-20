import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';

import { FormComponent } from './form.component';
import { IMovie } from '../interfaces/IMovie';
import { MockDataService } from '../services/mock-data.service';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientModule } from '@angular/common/http';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormComponent ],
      imports: [ ReactiveFormsModule, RouterTestingModule, HttpClientModule ]
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
    const mockMovie: IMovie = new MockDataService().movies[0];
    component.cart = [mockMovie];
    component.mapItems();
    expect(component.orderRows).toEqual([{ ProductId: 76 , Amount: 1 }]);
    localStorage.removeItem('cart');
  });

});
