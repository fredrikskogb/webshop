import { Component, OnInit } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})

export class MoviesComponent implements OnInit {

  movies: IMovie[];

  constructor(private service: DataService) { }

  // Get all movies. Send to movie-presentation-component.ts with @Input
  ngOnInit() {
    this.service.getData().subscribe((data) => { this.movies = data; });
  }

}