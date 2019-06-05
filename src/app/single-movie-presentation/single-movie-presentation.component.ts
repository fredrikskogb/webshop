import { Component, OnInit } from '@angular/core';
import { IMovie } from '../interfaces/IMovie';
import { DataService } from '../services/data.service';
import { CartService } from '../services/cart-service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-movie-presentation',
  templateUrl: './single-movie-presentation.component.html',
  styleUrls: ['./single-movie-presentation.component.css']
})
export class SingleMoviePresentationComponent implements OnInit {

  movie: IMovie;
  loading = false;

  constructor(private route: ActivatedRoute, private service: DataService, private cartService: CartService) { }

  // Get movie through route params id
  ngOnInit() {
    this.route.params.subscribe(myParams => {
      const i = parseInt(myParams.id);
      this.service.getMovie(i).subscribe((data) => {
        this.movie = data;
        this.loading = true;
      });
    });
  }

  // Use /services/cart-service.ts to add movie to cart.
  addToCart() {
    this.cartService.addToCart(this.movie);
  }

}
