import { Component } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import values from '../values';
import { NavServiceService } from './service/nav-service.service';
import { NavAnchorDirective } from './nav-anchor.directive';
import { AnalyticsService } from './service/analytics.service';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Mousewheel } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination, Mousewheel]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  headerHeightPx = values.HEADER_HEIGHT_PX;
  mobileMenuOpen = false;

  constructor(
    public navService: NavServiceService,
    private _viewportScroller: ViewportScroller,
    analytics: AnalyticsService
  ) {
    analytics.init();
  }

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  onMobileNavClick(navAnchor: NavAnchorDirective) {
    this._viewportScroller.scrollToPosition([0, navAnchor.getYPos() - values.HEADER_CONTENT_OFFSET_PX]);
    this.navService.scrolledTo(navAnchor);
    this.mobileMenuOpen = false;
  }

  scrollToTop() {
    this._viewportScroller.scrollToPosition([0, 0]);
  }
}
