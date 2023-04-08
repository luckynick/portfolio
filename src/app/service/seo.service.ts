import { Injectable } from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private _meta: Meta,
    ) { }

  setDescriptionMeta(content: string) {
    this._meta.updateTag({ name: 'description', content });
  }
}
