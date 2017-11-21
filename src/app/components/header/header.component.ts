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
  collapsed = true;
  image = 'assets/images/hamburger-menu.png';
  constructor(private router: Router, private route:ActivatedRoute) { }

  ngOnInit() {
    // console.log("init: " +this.route.url);
    // if(this.router.url == '/home' || this.router.url == '/about'){
    //   window.scrollTo(0, 0);
    // }
  }

  goTo(pos : string) {
    // console.log("smooth: " +this.route.url);
    if(this.router.url === '/home' && pos === 'home_link'
        || this.router.url === '/about' && pos === 'about_link'){
      // console.log("HERE");
      window.scrollTo(0, 0);
    }
    else if(this.router.url === '/about' && pos === 'portfolio_link'){
      //NOTE: This is handled by fragment that we retrieve in home component
    }
    else{
      var fixedString = '#' + pos;
      var link = $(fixedString);
      var position = link.position();
      //console.log(fixedString + ":" + position.top);
      window.scrollTo(0,position.top);
    }
    }
  }

