import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { AdminComponent } from './admin.component';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from '../services/data.service';
import { MockDataService } from '../services/mock-data.service';

describe('AdminComponent', () => {
  let component: AdminComponent;
  let fixture: ComponentFixture<AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminComponent ],
      imports: [HttpClientModule]
    })
    .overrideComponent(AdminComponent, { set: { providers: [ {provide: DataService, useClass: MockDataService}]}})
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain order', () => {
    expect(component.order.length).toBe(2);
  });

  it('should get what movies are in stock', () => {
    expect(component.movies.length).toBe(2);
  });


  it('should set orderPresentation', () => {
    component.mapItems();
    expect(component.orderPresentation.length).toBe(2);
  });

 
});
