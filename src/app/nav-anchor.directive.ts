import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';
import { NavServiceService } from './service/nav-service.service';

@Directive({
  selector: '[appNavAnchor]'
})
export class NavAnchorDirective implements OnInit, OnDestroy {

  @Input() appNavAnchor = '';

  constructor(
    private navService: NavServiceService,
    private elRef: ElementRef
    ) { }

  ngOnInit() {
    this.navService.addNavAnchor(this);
  }
  ngOnDestroy() {
    this.navService.removeNavAnchor(this);
  }

  public getText() {
    if(this.appNavAnchor) return this.appNavAnchor;
    return (this.elRef.nativeElement as HTMLElement).textContent;
  }

  public getYPos() {
    return (this.elRef.nativeElement as HTMLElement).offsetTop;
  }

}
