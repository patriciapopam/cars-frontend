import { Component, HostListener } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SideNavService } from 'src/app/services/SideNavService/side-nav.service';
import { AddEditModalService } from 'src/app/services/EditModalService/add-edit-modal-service.service';

@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.css'],
  animations: [
    trigger('openClose', [
      state(
        'open',
        style({
          left: '0',
        })
      ),
      state(
        'close',
        style({
          left: '-25%',
        })
      ),
      transition('open <=> close', [animate('0.3s')]),
    ]),
  ],
})

/**
 * Component that represents the side navigation bar of the application.
 * This component is responsible for displaying the navigation links and handling the open/close animation.
 * The open/close animation is triggered by the SideNavService and can be triggered by clicking the hamburger menu, the backdrop, or pressing the escape key.
 */

export class SideNavbarComponent {
  constructor(public sideNavService: SideNavService,
              private addEditModalService: AddEditModalService,) {}

  closeSideNav(): void {
    this.sideNavService.toggleSideNav();
  }

  addCar(): void {
    this.addEditModalService.openAddDialog();
    this.closeSideNav();
  }
}
