import { Component, OnInit } from '@angular/core';
import { FeatureImageComponent} from './../feature-image/feature-image.component';

// TODO: Images must be with same height for each row, tim's job.
const IMAGES = [
  { imgID: 1, title: "WP Website", imgPath: "assets/images/gallery/01preview.gif", imgURI: "" },
  { imgID: 2, title: "WP Mobile App", imgPath: "assets/images/gallery/02preview.png", imgURI: "" },
  { imgID: 3, title: "Excelando Website - Coming Soon", imgPath: "assets/images/gallery/06preview.png", imgURI: "" },
  { imgID: 4, title: "Yes Binge Buzzfeed Game", imgPath: "assets/images/gallery/05preview.png", imgURI: "" },
  { imgID: 5, title: "Volvo Landing Page", imgPath: "assets/images/gallery/03preview.png", imgURI: "" },
  { imgID: 6, title: "Reshet x Elite Collaboration", imgPath: "assets/images/gallery/04preview.gif", imgURI: "" },
];

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images : any[];
  constructor() { 
    this.images = IMAGES;
  }

  ngOnInit() {
  }

}
