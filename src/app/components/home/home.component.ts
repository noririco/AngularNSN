import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { ContentMainComponent } from './../content-main/content-main.component';
import { FooterComponent } from './../footer/footer.component';
import { GalleryComponent } from './../gallery/gallery.component';
import { HeaderComponent } from './../header/header.component';

import * as $ from 'jquery';
import { fadeInAnimation } from '../../_animations/fadeIn';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class HomeComponent implements OnInit {
  //ID: any;
  constructor(private route: ActivatedRoute, private router: Router) { 
    //for about/:id
    // this.route.params.subscribe( res => this.ID = +[res.id]);
    //console.log(this.route.snapshot.fragment);
  }

  ngOnInit(): void {
    // TODO: Toggle this to make NO SCROLL from about page to portfolio
    if(this.route.snapshot.fragment == 'portfolio'){
    //  console.log("IM HERE");
    
    //   var fixedString = '#portfolio_link';
    //   var link = $(fixedString);
    //   var position = link.position();
    //   window.scrollTo(0,position.top);
    } 
    else{
    //  console.log("IM  OVER HERE");
      window.scrollTo(0,0);
    }
     //END OF TOGGLE
  }
}
