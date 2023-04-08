import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-webshop-page',
  templateUrl: './webshop-page.component.html',
  styleUrls: ['./webshop-page.component.scss']
})
export class WebshopPageComponent implements OnInit {

  constructor(
    private _meta: Meta
  ) { }

  ngOnInit(): void {
    
  }

}
