import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'country',
    component: AddCountryComponent
 },	
 {
    path: 'person',
    component: AddPersonComponent
 },
 {
    path: 'error',
    component: GlobalErrorComponent
 },			
 {
    path: '',
    redirectTo: '/country',
    pathMatch: 'full'
 },
       {
    path: '**',
    component: PageNotFoundComponent 
       }	
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
