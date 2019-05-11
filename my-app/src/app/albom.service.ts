import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IAlbom} from './albom'
@Injectable({
  providedIn: 'root'
})
export class AlbomService {

  constructor(private http:HttpClient) { }


get(){
return this.http.get<IAlbom[]>('https://jsonplaceholder.typicode.com/albums');
}

}
