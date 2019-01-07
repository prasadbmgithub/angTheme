import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Layout1Module } from './layout/vertical/layout1/layout1.module';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { ItextpdfModule } from './main/itextpdf/itextpdf.module';



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent
    
  ],
  imports: [
    BrowserModule,
    Layout1Module,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
