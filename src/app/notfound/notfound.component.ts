import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-notfound',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotfoundComponent implements OnInit {

 @Input() visible:boolean = true;
 @Input() notFoundMessage:string = 'Nothing Found!';
 @Input() resetLinkText:string='Reset';
 @Input() resetLinkRoute:string = '/'
  constructor() { }

  ngOnInit(): void {
  }

}
