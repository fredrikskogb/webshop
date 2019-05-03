import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';

import { SingleMoviePresentationComponent } from './single-movie-presentation.component';
import { DataService } from '../services/data.service';
import { MockDataService } from '../services/mock-data.service';

describe('SingleMoviePresentationComponent', () => {
  let component: SingleMoviePresentationComponent;
  let fixture: ComponentFixture<SingleMoviePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, RouterTestingModule],
      declarations: [ SingleMoviePresentationComponent ]
    })
    .overrideComponent(SingleMoviePresentationComponent, { set: { providers: [ {provide: DataService, useClass: MockDataService}]}})
    .compileComponents();
  
    let store = {};
    const mockLocalStorage = {
      getItem: (key: string): string => {
        return key in store ? store[key] : null;
      },
      setItem: (key: string, value: string) => {
        store[key] = `${value}`;
      },
      removeItem: (key: string) => {
        delete store[key];
      },
      clear: () => {
        store = {};
      }
    };

    spyOn(localStorage, 'getItem')
    .and.callFake(mockLocalStorage.getItem);
    spyOn(localStorage, 'setItem')
    .and.callFake(mockLocalStorage.setItem);
    spyOn(localStorage, 'removeItem')
    .and.callFake(mockLocalStorage.removeItem);
    spyOn(localStorage, 'clear')
    .and.callFake(mockLocalStorage.clear);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMoviePresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});

describe('setAccessToken', () => {
  let component: SingleMoviePresentationComponent;

  it('should store the token in localStorage',
    () => {
      component.setAccessToken('sometoken');
      expect(localStorage.getItem('id_token')).toEqual('sometoken');
  });
});
describe('getAccessToken', () => {
  let component: SingleMoviePresentationComponent;

  it('should return stored token from localStorage',
    () => {
      localStorage.setItem('id_token', 'anothertoken');
      expect(component.getAccessToken()).toEqual('anothertoken');
  });
});