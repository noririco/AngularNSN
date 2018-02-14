import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImageService } from './../../services/image.service';
import { fadeInAnimation } from '../../_animations/fadeIn';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class ProjectDetailComponent implements OnInit {

  image : any;
  id: number;
  scale: string;

  constructor(private _imageService : ImageService,
              private route: ActivatedRoute) { 
    
  }

  ngOnInit() {
    this.route.params.subscribe( params => {
      this.id = params['id'],
      this.scale = params['scale']
    });
    this.image = this._imageService.getImageProject(this.id, this.scale);
    window.scrollTo(0,0);
  }
  ngOnDestroy() {
    
  }

}
