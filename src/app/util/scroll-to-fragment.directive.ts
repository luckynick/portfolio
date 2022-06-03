import { Directive, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appScrollToFragment]'
})
export class ScrollToFragmentDirective {

  @Input('appScrollToFragment') fragment: string = '';

  constructor() { }

  @HostListener('click', ['$event.target'])
  onClick(event: any) {
    if(!this.fragment) throw `Undefined fragment to scroll to. `;
    document.querySelector('#' + this.fragment)!.scrollIntoView()
  }

}
