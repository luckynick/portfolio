import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-cus-portal-page',
  templateUrl: './cus-portal-page.component.html',
  styleUrls: ['./cus-portal-page.component.scss']
})
export class CusPortalPageComponent implements OnInit {

  constructor(
    private _meta: Meta
  ) { }

  ngOnInit(): void {
    this._meta.updateTag({ name: 'description', content: $localize `Creating software for your needs` });
  }

}
