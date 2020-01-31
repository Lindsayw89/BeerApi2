import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BeerComponent } from './beer/beer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import{MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material'
import { FileDetector } from 'protractor';
import {MatFormFieldModule} from '@angular/material/form-field';


@NgModule({
  declarations: [
    AppComponent,
    BeerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule, 
     MatTableModule, 
     MatSortModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
