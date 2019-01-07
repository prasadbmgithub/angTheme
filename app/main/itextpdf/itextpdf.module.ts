import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { ItextpdfRoutingModule } from './itextpdf-routing.module';
import { PdfListComponent } from './components/pdf-list/pdf-list.component';
import { PdfNewComponent } from './components/pdf-new/pdf-new.component';

@NgModule({
  declarations: [PdfListComponent, PdfNewComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ItextpdfRoutingModule
  ],
  exports:[

  ]
})
export class ItextpdfModule { }
