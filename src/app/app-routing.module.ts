import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { MoviesComponent } from './movies/movies.component';
import { SingleMoviePresentationComponent } from './single-movie-presentation/single-movie-presentation.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { VerificationComponent } from './verification/verification.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchResultComponent } from './search-result/search-result.component';

const appRoutes = 
  [
    { path: '', component: MoviesComponent },
    { path: 'movie/:id', component: SingleMoviePresentationComponent },
    { path: 'checkout', component: CheckoutComponent },
    { path: 'verification', component: VerificationComponent },
    { path: 'admin', component: AdminComponent },
    { path: 'search/:searchValue', component: SearchResultComponent },
    { path: '**', component: PageNotFoundComponent }
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
