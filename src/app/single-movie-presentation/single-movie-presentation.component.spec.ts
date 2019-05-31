import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { SingleMoviePresentationComponent } from './single-movie-presentation.component';
import { DataService } from '../services/data.service';
import { MockDataService } from '../services/mock-data.service';
import { LoadingAnimationComponent } from '../UI/loading-animation/loading-animation.component';


describe('SingleMoviePresentationComponent', () => {
  let component: SingleMoviePresentationComponent;
  let fixture: ComponentFixture<SingleMoviePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule ],
      declarations: [ SingleMoviePresentationComponent, LoadingAnimationComponent ]
      
    })

    .overrideComponent(SingleMoviePresentationComponent, { set: { providers: [ {provide: DataService, useClass: MockDataService}]}})
    .compileComponents();
    
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMoviePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain movie with id 76', () => {
    expect(component.movie.id).toBe(76);
  });

  it('should add product to local storage and increment cart', () => {
    component.addToCart();
    expect(localStorage.getItem('cart')).toBeDefined();
    localStorage.removeItem('cart');
  });


});