import { Component, OnInit } from '@angular/core';
import { MatMenuItem } from '@angular/material/menu';

@Component({
  selector: 'app-lang-selection',
  templateUrl: './lang-selection.component.html',
  styleUrls: ['./lang-selection.component.scss']
})
export class LangSelectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onLangClick(lang: string) {
    //const lang = buttonElem._getHostElement().getAttribute('data-lang');
    location.pathname = '/' + lang + '/';
  }

  isLangDisabled(lang: string) {
    //const lang = buttonElem._getHostElement().getAttribute('data-lang');
    return location.pathname.startsWith('/' + lang);
  }

}
