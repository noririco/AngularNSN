import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  myLazyImage: any;
  constructor() {
    this.myLazyImage = '../assets/images/BG_fixed.png';
   }
  title = 'app';
  ngOnInit() {
    
  }
}
