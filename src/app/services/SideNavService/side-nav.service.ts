import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
/**
 * Service for managing the state of the side navigation menu.
 */
export class SideNavService  {
  isOpen = false;

  toggleSideNav(): void {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen)
  }
}
