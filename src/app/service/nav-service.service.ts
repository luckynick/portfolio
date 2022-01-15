import { Injectable } from '@angular/core';
import { combineLatest, ReplaySubject, throttleTime } from 'rxjs';
import { NavAnchorDirective } from '../nav-anchor.directive';
import { WindowScrollService } from './window-scroll.service';

@Injectable({
  providedIn: 'root'
})
export class NavServiceService {

  private anchors = new Set<NavAnchorDirective>();
  private anchorsSorted: NavAnchorDirective[] = [];
  private _anchors$ = new ReplaySubject<NavAnchorDirective[]>(1);
  private _anchorsDelayed$ = this._anchors$.pipe(throttleTime(100, undefined, { trailing: true }));
  get anchors$() {
    return this._anchorsDelayed$;
  }

  private _currentAnchor$ = new ReplaySubject<NavAnchorDirective | undefined>(1);
  get currentAnchor$() {
    return this._currentAnchor$.asObservable();
  }

  constructor(private scrollService: WindowScrollService) {
    combineLatest([scrollService.scroll$, this._anchorsDelayed$]).pipe(throttleTime(500, undefined, { trailing: true })).subscribe(([scrollY, ancnors]) => {
      const currentAnchor = this.anchorsSorted.find(el => el.getYPos() < scrollY + window.innerHeight / 2);
      this._currentAnchor$.next(currentAnchor);
    });
  }

  addNavAnchor(anchor: NavAnchorDirective) {
    this.anchors.add(anchor);
    this._updateAnchorsObservable();
  }

  removeNavAnchor(anchor: NavAnchorDirective) {
    this.anchors.delete(anchor);
    this._updateAnchorsObservable();
  }

  private _updateAnchorsObservable() {
    this.anchorsSorted = Array.from(this.anchors);
    this.anchorsSorted.sort((el1, el2) => el1.getYPos() - el2.getYPos());
    this._anchors$.next(this.anchorsSorted);
  }
}
