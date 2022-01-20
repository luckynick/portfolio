import { Component } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import values from '../values';
import { ContactBottomSheetComponent } from './contact-bottom-sheet/contact-bottom-sheet-component';

// import Swiper core and required modules
import SwiperCore, { Navigation, Pagination } from 'swiper';
// install Swiper modules
SwiperCore.use([Navigation, Pagination]);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  headerHeightPx = values.HEADER_HEIGHT_PX;

  constructor(private _bottomSheet: MatBottomSheet) {
    
  }

  openBottomSheet(): void {
    this._bottomSheet.open(ContactBottomSheetComponent);
  }
}
