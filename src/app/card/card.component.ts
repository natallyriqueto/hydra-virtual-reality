import { Component, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {
  @Input() title!: string;
  @Input() description!: string;
  @Input() imgName!: string;

  btnTitle: string = "try it now";

  ngOnChanges() {}

}
