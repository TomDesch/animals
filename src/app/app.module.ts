import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {LayoutModule} from "./layout/layout.module";
import { ProfileGalleryComponent } from './profile-gallery/profile-gallery.component';
import {HttpClientModule} from "@angular/common/http";
import {NameFilterPipe} from "./pipes/name-filter.pipe";

@NgModule({
  declarations: [
    AppComponent,
    ProfileGalleryComponent,
    NameFilterPipe
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    HttpClientModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }
