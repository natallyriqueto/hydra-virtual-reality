import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  joinBtnTitle: string = "JOIN HYDRA";
  showToggleMenu: boolean = false;

  @Output() sidenavToggle = new EventEmitter();

  toggleSidenav() {
    this.showToggleMenu = !this.showToggleMenu;
    this.sidenavToggle.emit(this.showToggleMenu);
  }

}
