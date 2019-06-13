import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SearchResultComponent } from './search-result.component';
import { DataService } from '../services/data.service';
import { MockDataService } from '../services/mock-data.service';
import { SearchResultPresentationComponent } from '../search-result-presentation/search-result-presentation.component';
import { RouterTestingModule } from '@angular/router/testing';
import { LoadingAnimationComponent } from '../ui/loading-animation/loading-animation.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultComponent, SearchResultPresentationComponent, LoadingAnimationComponent ],
      imports: [RouterTestingModule]
    })
    .overrideComponent(SearchResultComponent, { set: { providers: [{ provide: ActivatedRoute, useValue: { params: of({searchValue: "Interstellar"}) }},
     {provide: DataService, useClass: MockDataService}]}})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain movie of id 76', () => {
    console.log(component.movies);
    expect(component.movies[0].id).toBe(76);
  });
});
