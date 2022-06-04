import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects-galery',
  templateUrl: './projects-galery.component.html',
  styleUrls: ['./projects-galery.component.scss']
})
export class ProjectsGaleryComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onSwiper(swiper: any) {
    console.log(swiper);
  }
  onSlideChange() {
    console.log('slide change');
  }

}
