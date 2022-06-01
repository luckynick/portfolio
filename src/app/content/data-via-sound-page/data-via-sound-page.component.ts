import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-data-via-sound-page',
  templateUrl: './data-via-sound-page.component.html',
  styleUrls: ['./data-via-sound-page.component.scss']
})
export class DataViaSoundPageComponent implements OnInit {

  constructor(
    private _meta: Meta
  ) { }

  ngOnInit(): void {
    this._meta.addTag({ name: 'description', content: $localize `Creating software for your needs` }, true);
  }

}
