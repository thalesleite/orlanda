import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-carousel-images',
  templateUrl: './carousel-images.component.html',
  styleUrls: ['./carousel-images.component.scss']
})
export class CarouselImagesComponent implements OnInit {
  //images = [1, 2, 3].map(() => `https://picsum.photos/1455/670?random&t=${Math.random()}`);
  images: Array<string> = [
    'assets/img/background.png',
    'assets/img/background2.png',
    'assets/img/background3.png'
  ];

  constructor(config: NgbCarouselConfig) { 
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
  }

  ngOnInit() {
  }

}