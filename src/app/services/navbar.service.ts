import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class NavbarService {
  private _enableBack: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _title: BehaviorSubject<string> = new BehaviorSubject<string>('Popular Movies');

  constructor() { }

  get enableBack(): Observable<boolean> {
    return this._enableBack.asObservable();
  }

  get title(): Observable<string> {
    return this._title.asObservable();
  }

  public resetEnableBack(): void {
    this._enableBack.next(false);
  }

  public resetTitle(): void {
    this._title.next('Popular Movies');
  }

  public setEnableBack(enableBack: boolean): void {
    this._enableBack.next(enableBack);
  }

  public setTitle(title: string): void {
    this._title.next(title);
  }
}
