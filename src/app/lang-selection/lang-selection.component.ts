import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lang-selection',
  templateUrl: './lang-selection.component.html',
  styleUrls: ['./lang-selection.component.scss']
})
export class LangSelectionComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
  }

  onLangClick(lang: string) {
    // Detect base path from current URL structure
    // Works for both root domain (moiseienko.net) and subdirectory (github.io/portfolio/)
    const pathname = location.pathname;

    // Find the language segment in the path and replace it
    // Matches patterns like /en/, /pl/, /uk/, /portfolio/en/, /portfolio/pl/, /portfolio/uk/
    const langPattern = /\/(?:en|pl|uk)\//;

    if (langPattern.test(pathname)) {
      // Replace existing language in path
      location.href = pathname.replace(langPattern, '/' + lang + '/');
    } else {
      // No language in path, append to root
      location.href = '/' + lang + '/';
    }
  }

  isLangDisabled(lang: string) {
    // Check if current path contains the language code
    return location.pathname.includes('/' + lang + '/');
  }

}
