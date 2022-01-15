import { Component, OnInit } from '@angular/core';
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

  constructor(public navService: NavServiceService) {
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

}
