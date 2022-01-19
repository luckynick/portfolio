import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { EMPTY, fromEvent, map, Observable, share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WindowScrollService {

  public scroll$: Observable<number>;

  constructor(
    @Inject(DOCUMENT) private document: any,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    if(isPlatformBrowser(this.platformId)){
      this.scroll$ = fromEvent(window, 'scroll').pipe(
        map(event =>{
          return window.scrollY || this.document.documentElement.scrollTop;
        }),  
        share()
      );
    }
    else{
      //in non-browser environments, provide an empty observable so you can safely subscribe to scroll$
      this.scroll$ = EMPTY;
      
    }
  }
}
