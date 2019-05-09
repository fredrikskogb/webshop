import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { SingleMoviePresentationComponent } from './single-movie-presentation/single-movie-presentation.component';
import { CheckoutComponent } from './checkout/checkout.component';

const appRoutes = 
  [
    { path: '', component: MoviesComponent },
    { path: 'movie/:id', component: SingleMoviePresentationComponent },
    { path: 'checkout', component: CheckoutComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule, 
  ],
  exports: [RouterModule],
  declarations: []
})

export class AppRoutingModule { }
