import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Layout1Component } from './layout1.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ContentComponent } from '../../components/content/content.component';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@NgModule({
  declarations: [
    Layout1Component,
    FooterComponent,
    ContentComponent,
    ToolbarComponent,
    NavbarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    Layout1Component
  ]
})
export class Layout1Module { }
