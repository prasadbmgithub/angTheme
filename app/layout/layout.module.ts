import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Layout1Module } from './vertical/layout1/layout1.module';
import { NavItemComponent } from './components/navbar/nav-item/nav-item.component';


@NgModule({
  declarations: [NavItemComponent],
  imports: [
    CommonModule,
    Layout1Module
  ],
  exports:[
    Layout1Module
  ]
})
export class LayoutModule { }
