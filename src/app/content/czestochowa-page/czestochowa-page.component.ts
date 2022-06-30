import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-czestochowa-page',
  templateUrl: './czestochowa-page.component.html',
  styleUrls: ['./czestochowa-page.component.scss']
})
export class CzestochowaPageComponent implements OnInit {

  constructor(
    private _meta: Meta
  ) { }

  ngOnInit(): void {
    this._meta.updateTag({ name: 'description', content: $localize `IT solutions for business in Czestochowa` });
  }

}
