import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SideNavService  {
  isOpen = false;

  toggleSideNav(): void {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen)
  }
}
