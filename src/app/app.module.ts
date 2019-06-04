import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviePresentationComponent } from './movie-presentation/movie-presentation.component';
import { SingleMoviePresentationComponent } from './single-movie-presentation/single-movie-presentation.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormComponent } from './form/form.component';
import { VerificationComponent } from './verification/verification.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { SearchResultPresentationComponent } from './search-result-presentation/search-result-presentation.component';
import { LoadingAnimationComponent } from './ui/loading-animation/loading-animation.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MoviePresentationComponent,
    SingleMoviePresentationComponent,
    CheckoutComponent,
    FormComponent,
    VerificationComponent,
    AdminComponent,
    PageNotFoundComponent,
    SearchResultComponent,
    SearchResultPresentationComponent,
    LoadingAnimationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    DragDropModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
