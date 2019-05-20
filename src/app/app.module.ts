import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesComponent } from './movies/movies.component';
import { MoviePresentationComponent } from './movie-presentation/movie-presentation.component';
import { FooterComponent } from './footer/footer.component';
import { SingleMoviePresentationComponent } from './single-movie-presentation/single-movie-presentation.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FormComponent } from './form/form.component';
import { VerificationComponent } from './verification/verification.component';
import { AdminComponent } from './admin/admin.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesComponent,
    MoviePresentationComponent,
    FooterComponent,
    SingleMoviePresentationComponent,
    CheckoutComponent,
    FormComponent,
    VerificationComponent,
    AdminComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
