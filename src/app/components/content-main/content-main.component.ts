import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-main',
  templateUrl: './content-main.component.html',
  styleUrls: ['./content-main.component.css']
})
export class ContentMainComponent implements OnInit {
  myImage : any;
  miniTitle : string;
  mainTitle : string;
  subTitle : string;
  aboutLinkTitle : string;
  
  constructor() { 
    this.myImage = this.getImageName();
    this.miniTitle = "-HELLO-";
    this.mainTitle = "I'm Tim Amar";
    this.subTitle = "Digital & Web Designer";
    this.aboutLinkTitle = "More info about me >";
  }

  ngOnInit() {
    
  }

  getImageName(){
    return "assets/images/BG_fixed.png";
  }
}
