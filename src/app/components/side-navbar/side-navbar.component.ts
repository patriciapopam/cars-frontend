import { Component, HostListener } from '@angular/core';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { SideNavService } from 'src/app/services/side-nav.service';

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
export class SideNavbarComponent {
  constructor(public sideNavService: SideNavService) {}

  closeSideNav(): void {
    this.sideNavService.toggleSideNav();
  }
}
