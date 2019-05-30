import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultComponent } from './search-result.component';
import { DataService } from '../services/data.service';
import { MockDataService } from '../services/mock-data.service';
import { SearchResultPresentationComponent } from '../search-result-presentation/search-result-presentation.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchResultComponent', () => {
  let component: SearchResultComponent;
  let fixture: ComponentFixture<SearchResultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultComponent, SearchResultPresentationComponent ],
      imports: [RouterTestingModule]
    })
    .overrideComponent(SearchResultComponent, { set: { providers: [ {provide: DataService, useClass: MockDataService}]}})
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
});
