import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { SqlqueryRoutingModule } from './sqlquery-routing.module';
import { QueryNewComponent } from './components/query-new/query-new.component';
import { QueryListComponent } from './components/query-list/query-list.component';


@NgModule({
  declarations: [QueryNewComponent, QueryListComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SqlqueryRoutingModule
  ],
  exports:[

  ]
})
export class SqlqueryModule { }
