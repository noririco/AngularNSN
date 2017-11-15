import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  constructor(private router: Router) { }
  title = 'app';
       ngOnInit() {
          //window.scrollTo(0,0);
       }
  
  
}
