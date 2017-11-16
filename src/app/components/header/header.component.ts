import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed = true;
  image = 'assets/images/hamburger-menu.png';
  constructor() { }

  ngOnInit() {
  }

  // goTo(location: string) : void
  // {
  //   window.location.hash = ''; 
  //   window.location.hash = location;
  // }

  // toggleCollapsed(): void {
  //   console.log(this.collapsed);
  //   this.collapsed = !this.collapsed;
  // }
}
