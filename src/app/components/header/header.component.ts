import { Component, OnInit } from '@angular/core';
import { NgStyle } from '@angular/common';
import * as $ from 'jquery';
import { NavigationEnd, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  collapsed : boolean = true;
  image : string = 'assets/images/hamburger-menu.png';
  homeTitle : string;
  portfolioTitle: string;
  aboutTitle: string;
  constructor(private router: Router, private route:ActivatedRoute) {
    this.homeTitle = "HOME";
    this.portfolioTitle = "PORTFOLIO";
    this.aboutTitle = "ABOUT";
   }
  ngOnInit() {
  }
}

