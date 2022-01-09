import { Component } from '@angular/core';
import values from '../values';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
  headerHeightPx = values.HEADER_HEIGHT_PX;
}
