import { ImageService } from './../../services/image.service';
import {Component, OnInit, DoCheck, OnChanges, EventEmitter, Output, Input} from '@angular/core';
import {NgStyle} from '@angular/common';
import * as $ from 'jquery';
import {NavigationEnd, Router, ActivatedRoute} from '@angular/router';
import { log } from 'util';

@Component({selector: 'app-nav-bar', templateUrl: './nav-bar.component.html', styleUrls: ['./nav-bar.component.css']})
export class NavBarComponent implements OnInit {
  collapsed : boolean;
  homeTitle : string;
  portfolioTitle : string;
  aboutTitle : string;
  @Input() isCollapsed: any;
  
  constructor(private router : Router, private route : ActivatedRoute, private imageService : ImageService) {
    this.homeTitle = "HOME";
    this.portfolioTitle = "PORTFOLIO";
    this.aboutTitle = "ABOUT";
    this.hasFragment();
    this.collapsed = false;
  }

  ngOnInit() : void {
    this.collapsed = this.isCollapsed;
    //console.log(this.collapsed);
  }

  ngDoCheck() : void {
    
  }

  myUrl(name: string) {
    //console.log(this.route.snapshot.url.toString());
    if (this.route.snapshot.url.toString() == name) {
      //console.log("here");
      
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
