import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent {
  slides: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});
  
  ngOnInit(): void {
    this.slides[0] = {
      src: '../../assets/unreal-engine.png',
    };
    this.slides[1] = {
      src: '../../assets/unity.png',
    }
    this.slides[2] = {
      src: '../../assets/oculus.png',
    },
    this.slides[3] = {
      src: '../../assets/vive.png',
    }
  }

}
