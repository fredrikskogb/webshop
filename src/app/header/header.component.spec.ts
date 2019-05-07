import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';
import { HttpClientModule } from '@angular/common/http';
import { IMovie } from '../interfaces/IMovie';
import { MockDataService } from '../services/mock-data.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent ],
      imports: [ HttpClientModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set cart to array', () => {
    expect(component.cart).toEqual([]);
  });
/*
  it('should set length of local storage cart array if has items', () => {
    const mockMovie: IMovie = new MockDataService().movies[0];
    localStorage.setItem('cart', JSON.stringify([mockMovie]));
    expect(component.cart.length).toEqual(1);
    localStorage.removeItem('cart');
  });

  describe('cartIsSet()', () => {
    it('should return true if there are items in cart', () => {
      const mockMovie: IMovie = new MockDataService().movies[0];
      localStorage.setItem('cart', JSON.stringify([mockMovie]));
      component.cartIsSet();
      expect(component.cart.length).toEqual(1);
      localStorage.removeItem('cart');
    });
  });
*/
});
