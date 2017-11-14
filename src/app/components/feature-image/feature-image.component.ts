import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature-image',
  templateUrl: './feature-image.component.html',
  styleUrls: ['./feature-image.component.css']
})
export class FeatureImageComponent implements OnInit {
  likeButton: any;
  linkButton: any;
  image: any;
  
  constructor() { }

  ngOnInit() {
  }

}
