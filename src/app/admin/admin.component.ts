import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { IOrder } from '../interfaces/IOrder';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  order: IOrder[];

  constructor(private service: DataService) { }

  ngOnInit() {
    this.service.getOrder().subscribe((data) => { this.order = data; });
  }

}
