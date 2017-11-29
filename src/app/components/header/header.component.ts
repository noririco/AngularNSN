import { ImageService } from './../../services/image.service';
import {Component, OnInit, DoCheck, OnChanges} from '@angular/core';
import {NgStyle} from '@angular/common';
import * as $ from 'jquery';
import {NavigationEnd, Router, ActivatedRoute} from '@angular/router';

@Component({selector: 'app-header', templateUrl: './header.component.html', styleUrls: ['./header.component.css']})
export class HeaderComponent implements OnInit {
  collapsed : boolean;
  image : any;
  homeTitle : string;
  portfolioTitle : string;
  aboutTitle : string;

  constructor(private router : Router, private route : ActivatedRoute, private imageService : ImageService) {
    this.homeTitle = "HOME";
    this.portfolioTitle = "PORTFOLIO";
    this.aboutTitle = "ABOUT";
    this.hasFragment();
    this.image = this.imageService.getImageGlobal(1);
    this.collapsed = false;
  }

  ngOnInit() : void {}

  ngDoCheck() : void {}

  myUrl() {
    // console.log(this.route.snapshot.url.toString());
    if (this.route.snapshot.url.toString() == 'home') {
      return true;
    } else 
      return false;
    }

  hasFragment() {
    if (this.route.snapshot.fragment !== undefined && this.route.snapshot.fragment !== null && this.route.snapshot.fragment == 'portfolio_link') {
      // console.log("yes");
      return true;
    } else {
      // console.log("no");
      return false;
    }
  }
}
