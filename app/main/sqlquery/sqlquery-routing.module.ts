import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QueryListComponent } from './components/query-list/query-list.component';
import { QueryNewComponent } from './components/query-new/query-new.component';

const queryRoutes: Routes = [
  {
    path:'list',
    component:QueryListComponent
  },
  {
    path:'new',
    component:QueryNewComponent
  },
  {
    path:'',
    component:QueryListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(queryRoutes)],
  exports: [RouterModule]
})
export class SqlqueryRoutingModule { }
