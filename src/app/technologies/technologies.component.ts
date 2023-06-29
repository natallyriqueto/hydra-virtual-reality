import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.scss']
})

export class TechnologiesComponent {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  isMobile: boolean = false;

  ngOnInit() {
    this.checkScreenSize();
  }

  checkScreenSize() {
    if (window.innerWidth <= 768) {
      this.isMobile = true;
    }
  }
}
