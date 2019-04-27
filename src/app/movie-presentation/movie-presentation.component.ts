import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';

@Component({
  selector: 'app-movie-presentation',
  templateUrl: './movie-presentation.component.html',
  styleUrls: ['./movie-presentation.component.css']
})
export class MoviePresentationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() movie: IMovie[]; 

}
