import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.css']
})
export class SocialComponent implements OnInit {
@Input() text: string="";
@Input() color: string=""
@Input() img: string="";

  constructor() { }

  ngOnInit(): void {
  }

}
