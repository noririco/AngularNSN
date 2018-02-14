import { log } from 'util';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  scaleSize: string;
  innerHeight: any;
  innerWidth: any;
  constructor(private _imageService : ImageService, private _router: Router) { 
    this.images = this._imageService.getImages();
  }
  
  ngOnInit() {
  }
  
  scaleAndgoProject(id: any) {
    this.innerHeight = (window.innerHeight);
    this.innerWidth = (window.innerWidth);
    console.log(this.innerHeight);
    console.log(this.innerWidth);
    
    if(this.innerWidth < 600) {
      this.scaleSize = 'mobile';
    }
    else if(this.innerWidth > 600 && this.innerWidth < 1025){
      this.scaleSize = 'tablet';
    }
    else {
      this.scaleSize = 'desktop';
    }

    this._router.navigate(['/about/'+id+'/'+this.scaleSize]);
  }

}
