import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.scss']
})
export class BenefitsComponent {
  cards = [
    { 
      title: "SIMULATION", 
      description: "Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
      imgName: "card-img-1.svg"
    },
    { 
      title: "EDUCATION", 
      description: "Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
      imgName: "card-img-2.svg"
    },
    { 
      title: "SELF-CARE", 
      description: "Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
      imgName: "card-img-3.svg"
    },
    { 
      title: "OUTDOOR", 
      description: "Vitae sapien pellentesque habitant morbinunc. Viverra aliquet  porttitor rhoncus libero justo laoreet sit amet vitae.",
      imgName: "card-img-3.svg"
    },
  ]
}
