import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { MatToolbarModule, MatListModule, MatGridListModule, MatButtonModule, MatButtonToggleModule } from '@angular/material';

import { MoviesService } from './services/movies.service';
import { NavbarService } from './services/navbar.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    MatToolbarModule, MatListModule, MatGridListModule,MatButtonModule, MatButtonToggleModule,
    AppRoutingModule
  ],
  providers: [
    MoviesService,
    NavbarService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private _moviesService: MoviesService, private _navbarService: NavbarService) { }
}
