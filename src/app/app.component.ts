import { Component } from '@angular/core';
import values from '../values';

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

  constructor() {
    
  }
}
