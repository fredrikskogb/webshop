import { Component, OnInit, Input } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';

@Component({
  selector: 'app-search-result-presentation',
  templateUrl: './search-result-presentation.component.html',
  styleUrls: ['./search-result-presentation.component.css']
})
export class SearchResultPresentationComponent{

  @Input() movie: IMovie[]; 

}
