import { Injectable } from '@angular/core';
import { BehaviorSubject, combineLatest, debounceTime, EMPTY, Observable, ReplaySubject, skipUntil, startWith, Subject, switchMap, throttleTime, timer } from 'rxjs';
import { NavAnchorDirective } from '../nav-anchor.directive';
import { WindowScrollService } from './window-scroll.service';

const SCROLL_THROTTLE_TIME = 300;

@Injectable({
  providedIn: 'root'
})
export class NavServiceService {

  //private navItemScroll = false;
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

  // Skip scroll event handling, set currently selected anchor, resume scrolling when it settles down
  private scrollPauser$ = new BehaviorSubject<('pause'|'unpause')>('unpause');
  private scrollPauseStopper$ = new Subject<void>();

  constructor(private scrollService: WindowScrollService) {
    this.scrollPauseStopper$.pipe(switchMap(val => timer(100)))
      .subscribe(done => this.scrollPauser$.next('unpause'));
    const pausableScroll$ = this.scrollPauser$.pipe(switchMap(val => {
      if(val === 'pause') {
        this.scrollPauseStopper$.next();
        return EMPTY;
      }
      else {
        return scrollService.scroll$;
      }
    }));

    scrollService.scroll$.subscribe(scrollY => this.scrollPauseStopper$.next());

    combineLatest([pausableScroll$, this._anchorsDelayed$]).pipe(throttleTime(SCROLL_THROTTLE_TIME, undefined, { trailing: true })).subscribe(([scrollY, ancnors]) => {
      const currentScroll = scrollY + window.innerHeight / 2;
      let currentAnchor: NavAnchorDirective | undefined, minDistance = Number.MAX_VALUE;
      for(const anchor of this.anchorsSorted) {
        const currentDistance = currentScroll - anchor.getYPos();
        if(currentDistance >= 0 && currentDistance < minDistance) {
          currentAnchor = anchor;
          minDistance = currentDistance;
        }
      }
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

  scrolledTo(anchor: NavAnchorDirective) {
    this.scrollPauser$.next('pause');
    this._currentAnchor$.next(anchor); 
  }

  private _updateAnchorsObservable() {
    this.anchorsSorted = Array.from(this.anchors);
    this.anchorsSorted.sort((el1, el2) => el1.getYPos() - el2.getYPos());
    this._anchors$.next(this.anchorsSorted);
  }
}
