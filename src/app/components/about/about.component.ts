import { ImageService } from './../../services/image.service';
import {HeaderComponent} from './../header/header.component';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ContentAboutComponent} from './../content-about/content-about.component';
import {fadeInAnimation} from '../../_animations/fadeIn';

@Component({
  selector: 'app-about', templateUrl: './about.component.html', styleUrls: ['./about.component.css'],
  //TODO: make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: {
    '[@fadeInAnimation]': ''
  }
})
export class AboutComponent implements OnInit {
  collapse : boolean;
  ID : any;
  logos : any;
  id: number;
  scale: string;
  scaleSize: string;
  innerHeight: any;
  innerWidth: any;
  constructor(private router : Router, 
              private route : ActivatedRoute,
              private _imageService: ImageService) {
    // check for about/:id this.route.params.subscribe( (res) => {   this.ID =
    // +[res.id]; });
  }
  
  ngOnInit() {
    // console.log(this.ID);
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

    this.route.params.subscribe( params => {
      this.id = params['id'],
      this.scale = params['scale']
    });
    this.logos = this._imageService.getLogos(this.scaleSize);
    console.log(this.logos);
    
    window.scrollTo(0, 0);
  }

  toggleCollapse(){
    this.collapse = true;
  }
  onToggleCollapse($event){
    this.collapse = !this.collapse; 
    //console.log(this.collapse); 
    // now we do *ngIf in template
    // or we can do class attachment
  }

}
