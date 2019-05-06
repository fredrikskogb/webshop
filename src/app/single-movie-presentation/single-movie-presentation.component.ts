import { Component, OnInit, Output} from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-single-movie-presentation',
  templateUrl: './single-movie-presentation.component.html',
  styleUrls: ['./single-movie-presentation.component.css']
})
export class SingleMoviePresentationComponent implements OnInit {

  @Output() addedToCart: number;

  movie: IMovie;

  count: number;

  constructor(private route: ActivatedRoute, private service: DataService){ 

  }

  ngOnInit() {
    this.route.params.subscribe(myParams => {  
      let i = parseInt(myParams["id"]);
      this.service.getMovie(i).subscribe((data) => { this.movie = data; });
    });
  }

  addToCart(){
    if(localStorage.getItem('cart')){
      let cart = JSON.parse(localStorage.getItem('cart'));
      if(cart instanceof Array){
        cart.push(this.movie);
        localStorage.setItem('cart', JSON.stringify(cart));
      }else{
        let movies = [];
        movies.push(cart, this.movie);
        localStorage.setItem('cart', JSON.stringify(movies));
      }
    }else{
      localStorage.setItem('cart', JSON.stringify(this.movie));
    }
  }

}
