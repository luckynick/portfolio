import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import values from '../../values';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  shouldAnimateMoveDownBtn = true;

  constructor(private viewportScroller: ViewportScroller) {
    this.viewportScroller.setOffset([0, values.HEADER_CONTENT_OFFSET_PX]);
  }

  ngOnInit(): void {
  }

  onMoveDownClick(event: any) {
    this.shouldAnimateMoveDownBtn = false;

    this.viewportScroller.scrollToAnchor('moveDownScrollHere');
  }

}
