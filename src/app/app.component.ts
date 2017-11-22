import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  myLazyImage: any;
  constructor() {
    this.myLazyImage = 'assets/images/BG_fixed.png';
   }
  title = 'app';
  ngOnInit() {  
        $(".preload").fadeOut(3000, function(){
          $(".tim").fadeIn(2000);
        });     
        
  }
}
