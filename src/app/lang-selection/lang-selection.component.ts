import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { MatMenuItem } from '@angular/material/menu';
import values from '../../values';

@Component({
  selector: 'app-lang-selection',
  templateUrl: './lang-selection.component.html',
  styleUrls: ['./lang-selection.component.scss']
})
export class LangSelectionComponent implements OnInit {

  langs = values.LANGS;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    
  }

  ngOnInit(): void {
  }

  onLangClick(lang: string) {
    //const lang = buttonElem._getHostElement().getAttribute('data-lang');
    location.pathname = '/' + lang + '/';
  }

  isLangDisabled(lang: string) {
    //const lang = buttonElem._getHostElement().getAttribute('data-lang');
    if(!isPlatformBrowser(this.platformId)) return false;
    return location.pathname.startsWith('/' + lang);
  }

}
