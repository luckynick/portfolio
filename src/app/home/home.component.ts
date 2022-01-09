import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';
import values from '../../values';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ContactBottomSheetComponent } from '../contact-bottom-sheet/contact-bottom-sheet-component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  shouldAnimateMoveDownBtn = true;

  constructor(
    private _viewportScroller: ViewportScroller,
    private _bottomSheet: MatBottomSheet
    ) {
    this._viewportScroller.setOffset([0, values.HEADER_CONTENT_OFFSET_PX]);
  }

  ngOnInit(): void {
  }

  onMoveDownClick(event: any) {
    this.shouldAnimateMoveDownBtn = false;

    this._viewportScroller.scrollToAnchor('moveDownScrollHere');
  }

  openBottomSheet(): void {
    this._bottomSheet.open(ContactBottomSheetComponent);
  }

}

