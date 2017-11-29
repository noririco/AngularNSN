import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-feature-image',
  templateUrl: './feature-image.component.html',
  styleUrls: ['./feature-image.component.css']
})
export class FeatureImageComponent implements OnInit {
  @Input() image: any;
  
  constructor() { }

  ngOnInit() {
  }

}
