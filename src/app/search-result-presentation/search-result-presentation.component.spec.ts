import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchResultPresentationComponent } from './search-result-presentation.component';
import { RouterTestingModule } from '@angular/router/testing';
import { DataService } from '../services/data.service';
import { MockDataService } from '../services/mock-data.service';
import { HttpClientModule } from '@angular/common/http';

describe('SearchResultPresentationComponent', () => {
  let component: SearchResultPresentationComponent;
  let fixture: ComponentFixture<SearchResultPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchResultPresentationComponent ],
      imports: [RouterTestingModule, HttpClientModule],
      providers: [{ provide: DataService, useClass: MockDataService }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchResultPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
