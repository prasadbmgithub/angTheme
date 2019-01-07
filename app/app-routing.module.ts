import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'pdf',
    loadChildren:'./main/itextpdf/itextpdf.module#ItextpdfModule'
  },
  {
    path:'query',
    loadChildren:'./main/sqlquery/sqlquery.module#SqlqueryModule'
  },
  {
  path:'**',
  component:PageNotFoundComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
