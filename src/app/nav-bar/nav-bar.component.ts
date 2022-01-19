import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import values from '../../values';
import { NavAnchorDirective } from '../nav-anchor.directive';
import { NavServiceService } from '../service/nav-service.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  navAnchors: NavAnchorDirective[] = [];
  currentAnchor = '';

  constructor(
    public navService: NavServiceService,
    private _viewportScroller: ViewportScroller,
    ) {
    navService.anchors$.subscribe(anchors => {
      this.navAnchors = anchors;
    });
    navService.currentAnchor$.subscribe(anchor => {
      let currA = '';
      if(anchor) currA = anchor.getText() || '';
      this.currentAnchor = currA;
    });
  }

  ngOnInit(): void {
  }

  onNavItemClick(navAnchor: NavAnchorDirective) {
    this._viewportScroller.scrollToPosition([0, navAnchor.getYPos() - values.HEADER_CONTENT_OFFSET_PX]);
    this.navService.scrolledTo(navAnchor);
  }

}
