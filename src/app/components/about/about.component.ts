import { HeaderComponent } from './../header/header.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentAboutComponent } from './../content-about/content-about.component';
import { fadeInAnimation } from '../../_animations/fadeIn';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  // make fade in animation available to this component
  animations: [fadeInAnimation],
  // attach the fade in animation to the host (root) element of this component
  host: { '[@fadeInAnimation]': '' }
})
export class AboutComponent implements OnInit {

  ID: any;
  constructor(private router: Router, private route: ActivatedRoute) { 
    // check for about/:id 
    // this.route.params.subscribe( (res) => {
    //   this.ID = +[res.id];
    // });
    
  }

  ngOnInit() {
    // console.log(this.ID);
    window.scrollTo(0,0);
  }

}
