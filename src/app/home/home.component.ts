import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import values from '../../values';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  get expYears() {
    // 20.10.2017
    return new Date().getFullYear() - new Date(1508454000000).getFullYear() - 1;
  }

  shouldAnimateMoveDownBtn = true;

  constructor(
    private _viewportScroller: ViewportScroller
    ) {
    this._viewportScroller.setOffset([0, values.HEADER_CONTENT_OFFSET_PX]);
  }

  ngOnInit(): void {
    
  }

  onMoveDownClick(event: any) {
    this.shouldAnimateMoveDownBtn = false;

    this._viewportScroller.scrollToAnchor('moveDownScrollHere');
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}

