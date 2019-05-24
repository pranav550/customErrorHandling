import { GlobalErrorHandlerService } from './GlobalErrorHandlerService';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GlobalErrorComponent } from './global-error/global-error.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AddCountryComponent } from './add-country/add-country.component';
import { AddPersonComponent } from './add-person/add-person.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    GlobalErrorComponent,
    PageNotFoundComponent,
    AddCountryComponent,
    AddPersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    GlobalErrorHandlerService,
    { provide: ErrorHandler, useClass: GlobalErrorHandlerService } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
