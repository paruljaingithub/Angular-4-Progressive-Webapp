import { Component, OnInit, OnDestroy } from '@angular/core';
import { Location } from '@angular/common';
import { Subscription } from 'rxjs';

import { NavbarService } from './services/navbar.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public enableBack: boolean;
  private _enableBackSubscription: Subscription;
  public title: string = 'Popular Movies';
  private _titleSubscription: Subscription;

  constructor(private _location: Location, private _navbarService: NavbarService) { }

  ngOnInit() {
    this._titleSubscription = this._navbarService.title.subscribe((title: string) => {
      this.title = title;
    });

    this._enableBackSubscription = this._navbarService.enableBack.subscribe((enableBack: boolean) => {
      this.enableBack = enableBack;
    });
  }

  ngOnDestroy() {
    this._titleSubscription.unsubscribe();
    this._enableBackSubscription.unsubscribe();
  }

  public goBack(): void {
    this._location.back();
  }
}
