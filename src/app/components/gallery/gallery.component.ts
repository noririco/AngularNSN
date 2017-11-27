import { Component, OnInit } from '@angular/core';
import { ImageService } from './../../services/image.service';
import { FeatureImageComponent} from './../feature-image/feature-image.component';

// TODO: Images must be with same height for each row, tim's job.

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  images : any[];
  constructor(private _imageService : ImageService) { 
    this.images = this._imageService.getImages();
  }

  ngOnInit() {
  }

}
