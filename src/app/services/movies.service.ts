import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';

@Injectable()
export class MoviesService {
  private _movieDBUrl: string = 'https://api.themoviedb.org/3/movie/';
  private _moviesDBUrl: string = 'https://api.themoviedb.org/3/discover/movie?api_key=';
  private _movies: Observable<any[]>;

  constructor(private _http: Http) {
    this._movies = this._fetchMovies();
  }

  get movies(): Observable<any[]> {
    return this._movies;
  }

  private _fetchMovies(): Observable<any[]> {
    const query: string = this._moviesDBUrl + environment.moviedb;
    return this._http.get(query)
      .map((res: Response) => { return res.json().results; })
      .catch((error: Response | any) => { return Observable.throw(error.code); });
  }

  public queryMovie(id: string) {
    const query: string = this._movieDBUrl + id + '?api_key=' + environment.moviedb;
    return this._http.get(query)
      .map((res: Response) => { return res.json(); })
      .catch((error: Response | any) => { return Observable.throw(error.code); });
  }
}
