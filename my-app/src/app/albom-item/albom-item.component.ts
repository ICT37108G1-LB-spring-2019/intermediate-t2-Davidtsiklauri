import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-albom-item',
  templateUrl: './albom-item.component.html',
  styleUrls: ['./albom-item.component.css']
})
export class AlbomItemComponent implements OnInit {
@Input () pos;
  constructor() { }

  ngOnInit() {
  }

}
