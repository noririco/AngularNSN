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
  ID: any;
  constructor(private route: ActivatedRoute, private router: Router) { 
    //for about/:id
    // this.route.params.subscribe( res => this.ID = +[res.id]);
    console.log(this.route.snapshot.fragment);
  }

  ngOnInit(): void {
    if(this.route.snapshot.fragment == 'portfolio'){
      var fixedString = '#portfolio_link';
      var link = $(fixedString);
      var position = link.position();
      window.scrollTo(0,position.top);
    } 
    else{
      window.scrollTo(0,0);
    }
  }
  
  // ngOnDestroy(){
  //   console.log("ngOnDestroy");  
  // }

  // title = "HomeComponent";
  // fullImagePath = '';
  // private chartData: Array<any>;
  // constructor() {
  //   this.fullImagePath = 'assets/images/milky-way.jpg';
  //  }
/* THIS IS CHART BAR STARTER */
  // ngOnInit() {
  //   // give everything a chance to get loaded before starting the animation to reduce choppiness
  //   setTimeout(() => {
  //     this.generateData();

  //     // change the data periodically
  //     setInterval(() => this.generateData(), 3000);
  //   }, 1000);
  // }

  // generateData() {
  //   this.chartData = [];
  //   for (let i = 0; i < (13 + Math.floor(Math.random() * 10)); i++) {
  //     this.chartData.push([
  //       `Index ${i}`,
  //       Math.floor(Math.random() * 100)
  //     ]);
  //   }
  // }

}
