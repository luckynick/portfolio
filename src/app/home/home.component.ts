import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import values from '../../values';
import { Meta } from '@angular/platform-browser';

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
    private _viewportScroller: ViewportScroller,
    private _meta: Meta
    ) {
    this._viewportScroller.setOffset([0, values.HEADER_CONTENT_OFFSET_PX]);
  }

  ngOnInit(): void {
    this._meta.addTag({ name: 'description', content: $localize `Professional programmer who will solve your problem` }, true);
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

