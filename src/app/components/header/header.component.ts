
import { ImageService } from './../../services/image.service';
import {Component, OnInit, DoCheck, OnChanges, EventEmitter, Output} from '@angular/core';
import {NgStyle} from '@angular/common';
import * as $ from 'jquery';
import {NavigationEnd, Router, ActivatedRoute} from '@angular/router';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import { fadeInAnimation } from '../../_animations/fadeIn';
import { fadeInWithColor } from '../../_animations/fadeInWithColor';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html', 
  styleUrls: ['./header.component.css'],
  animations: [fadeInAnimation, fadeInWithColor],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '', '[@fadeInWithColor]': ''}
})
export class HeaderComponent implements OnInit {
  collapsed : boolean;
  image : any;
  //@Output() onToggleCollapse = new EventEmitter<boolean>();

  constructor(private router : Router, private route : ActivatedRoute, private imageService : ImageService) {
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

  onHamburgerMenuClick(){
    //console.log("Clicked");
    this.collapsed = !this.collapsed;
    //this.onToggleCollapse.emit();
  }
  onHeaderWrapperClick(){
    this.collapsed = !this.collapsed;
  }
}
