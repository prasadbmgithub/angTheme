import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PdfListComponent } from './components/pdf-list/pdf-list.component';
import { PdfNewComponent } from './components/pdf-new/pdf-new.component';

const pdfRoutes: Routes = [
  {
    path:'list',
    component:PdfListComponent
  },
  {
    path:'new',
    component:PdfNewComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(pdfRoutes)],
  exports: [RouterModule]
})
export class ItextpdfRoutingModule { }
