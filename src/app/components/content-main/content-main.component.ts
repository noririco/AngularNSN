import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-main',
  templateUrl: './content-main.component.html',
  styleUrls: ['./content-main.component.css']
})
export class ContentMainComponent implements OnInit {
  myImage : any;
  constructor() { }

  ngOnInit() {
    this.myImage = this.getImageName();
  }

  getImageName(){
    return "assets/images/BG_fixed.png";
  }
}
