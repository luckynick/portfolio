import { Component, OnInit } from '@angular/core';
import values from '../values';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Mousewheel } from 'swiper';
import { Meta } from '@angular/platform-browser';
import { filter } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { SeoService } from './service/seo.service';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'portfolio';
  headerHeightPx = values.HEADER_HEIGHT_PX;

  constructor(
    private _meta: Meta,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _seoService: SeoService 
  ) {
    this._router.events
      .pipe(filter((e) => e instanceof NavigationEnd))
      .subscribe((event: any) => {
        // get the route, right from the root child
        // this allows a title to be set at any level
        // but for this to work, the routing module should be set with paramsInheritanceStrategy=always
        let route = this._activatedRoute.snapshot;
        while (route.firstChild) {
          route = route.firstChild;
        }
        // create a function with a fallback title
        if(route.data && route.data['description']) 
          this._seoService.setDescriptionMeta(route.data['description']);
      });
  }

  ngOnInit(): void {
    this._meta.addTag({ name: 'description', content: $localize `Professional programmer who will solve your problem` });
  }
}
