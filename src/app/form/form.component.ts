import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  order = this.fb.group({
    name: ['', Validators.required],
    type: ['', Validators.required]
  });

  submitOrder(){
    
  }

}
