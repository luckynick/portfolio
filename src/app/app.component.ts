import { Component, OnInit } from '@angular/core';
import values from '../values';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination, Mousewheel } from 'swiper';
import { Meta } from '@angular/platform-browser';
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
    private _meta: Meta
  ) {
    
  }

  ngOnInit(): void {
    this._meta.addTag({ name: 'description', content: $localize `Professional programmer who will solve your problem` });
  }
}
