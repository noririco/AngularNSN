import { ContentMainComponent } from './../content-main/content-main.component';
import { FooterComponent } from './../footer/footer.component';
import { GalleryComponent } from './../gallery/gallery.component';
import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ngOnInit(): void {
    //throw new Error("Method not implemented.");
  }
  
  
  
  
  
  // title = "HomeComponent";
  // fullImagePath = '';
  // private chartData: Array<any>;
  // constructor() {
  //   this.fullImagePath = 'assets/images/milky-way.jpg';
  //  }

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
