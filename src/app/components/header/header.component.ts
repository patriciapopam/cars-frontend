import { Component, OnInit } from '@angular/core';
import { SideNavService } from 'src/app/services/SideNavService/side-nav.service';
import {MatMenuModule} from '@angular/material/menu';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  
})

export class HeaderComponent implements OnInit {

  username: string = "Patricia Popa";

  constructor(private sideNavService:SideNavService) {}

  ngOnInit(): void {
  }

  toggleSideNav(): void {
    this.sideNavService.toggleSideNav();
  }
}
