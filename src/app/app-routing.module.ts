import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { SingleMoviePresentationComponent } from './single-movie-presentation/single-movie-presentation.component';

const appRoutes = [{ path: '', component: MoviesComponent },
{ path: 'movie/:id', component: SingleMoviePresentationComponent }];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(appRoutes),
    CommonModule
  ]
})

export class AppRoutingModule { }
