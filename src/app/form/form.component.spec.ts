import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormComponent } from './form.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MockDataService } from '../services/mock-data.service';
import { IMovie } from '../interfaces/IMovie';

describe('FormComponent', () => {
  let component: FormComponent;
  let fixture: ComponentFixture<FormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [ FormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    const mockMovie: IMovie = new MockDataService().movies[0];
    localStorage.setItem('cart', JSON.stringify([mockMovie]));
    fixture = TestBed.createComponent(FormComponent);
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

});
