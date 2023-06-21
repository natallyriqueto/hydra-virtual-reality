import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  shouldShowSideNav: boolean = false;

  handleChildEvent(isToggled: boolean){
    this.shouldShowSideNav = isToggled;
  }
}
