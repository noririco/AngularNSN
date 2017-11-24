import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  email : string;
  phone : string;
  facebooklogo: string;
  instgramlogo: string;

  constructor() { 
    this.email = "timamar187@gmail.com";
    this.phone = "+972-52-3000-393";
    
  }

  ngOnInit() {
  }

}
