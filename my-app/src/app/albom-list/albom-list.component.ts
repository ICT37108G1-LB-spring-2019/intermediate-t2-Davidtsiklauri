import { Component, OnInit } from '@angular/core';
import {AlbomService} from '../albom.service'
export {IAlbom} from '../albom'
@Component({
  selector: 'app-albom-list',
  templateUrl: './albom-list.component.html',
  styleUrls: ['./albom-list.component.css']
})
export class AlbomListComponent implements OnInit {
post = [];
  constructor(private albom:AlbomService) { }

  ngOnInit() {
    this.albom.get()
              .subscribe((data) => {
                 
this.post = data;



              } );
       


  }

}
