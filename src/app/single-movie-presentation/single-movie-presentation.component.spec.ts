import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMoviePresentationComponent } from './single-movie-presentation.component';

describe('SingleMoviePresentationComponent', () => {
  let component: SingleMoviePresentationComponent;
  let fixture: ComponentFixture<SingleMoviePresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMoviePresentationComponent ]
    })
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
});
