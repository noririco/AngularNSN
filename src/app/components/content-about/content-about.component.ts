import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-content-about',
  templateUrl: './content-about.component.html',
  styleUrls: ['./content-about.component.css']
})
export class ContentAboutComponent implements OnInit {
  @Input() logos: any;
  constructor() { }

  ngOnInit() {
  }

}
