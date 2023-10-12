import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchItem:string = ''
  
  constructor(private route:Router, private actroute:ActivatedRoute) { }

  ngOnInit(): void {
    this.actroute.params.subscribe(params=>{
      if(params['searchItem'])
      this.searchItem = params['searchItem']
    })

  }
  search():void{
    this.route.navigate([`/search/${this.searchItem}`]) 
    
    
  }

}
