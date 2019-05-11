import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AlbomListComponent } from './albom-list/albom-list.component';
import { AlbomItemComponent } from './albom-item/albom-item.component';
import {AlbomService} from './albom.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    AlbomListComponent,
    AlbomItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AlbomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
