import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { FooterComponent } from './footer/footer.component';
import { MoviePresentationComponent } from './movie-presentation/movie-presentation.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SingleMoviePresentationComponent } from './single-movie-presentation/single-movie-presentation.component';
import { FormComponent } from './form/form.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        HeaderComponent,
        MoviesComponent,
        FooterComponent,
        MoviePresentationComponent, 
        SingleMoviePresentationComponent,
        FormComponent
      ],
      imports: [HttpClientModule, AppRoutingModule ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

});
