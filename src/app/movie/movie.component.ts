import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import { MoviesService } from '../services/movies.service';
import { NavbarService } from '../services/navbar.service';

@Component({
  moduleId: module.id,
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit, OnDestroy {
  private _idSubscription: Subscription;
  public movie: any;
  private _movieSubscription: Subscription;
  private _posterUrl: string = 'https://image.tmdb.org/t/p/w185_and_h278_bestv2';

  constructor(private _moviesService: MoviesService, private _navbarService: NavbarService, private _route: ActivatedRoute, private _sanitizer: DomSanitizer) { }

  ngOnInit() {
    this._navbarService.setEnableBack(true);
    this._idSubscription = this._route.params.subscribe((params: any) => {
      this._movieSubscription = this._moviesService.queryMovie(params.id).subscribe((movie: any) => {
        this.movie = movie;
        this._navbarService.setTitle(movie.title);
      });
    });
  }

  ngOnDestroy() {
    this._idSubscription.unsubscribe();
    this._navbarService.resetEnableBack();
    this._navbarService.resetTitle();
    if (this._movieSubscription) { this._movieSubscription.unsubscribe; }
  }

  public sanitizeImage(image: string) {
    return this._sanitizer.bypassSecurityTrustStyle(`url(${this._posterUrl + image})`);
  }

  public star(count: number): boolean {
    const stars: number = Math.round(this.movie.vote_average);
    const active: number = count*2;
    return (active <= stars);
  }
}