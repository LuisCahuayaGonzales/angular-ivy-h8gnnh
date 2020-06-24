import { NgModule } from '@angular/core';

import {HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { ReportComponent } from './components/report.component';

import { ClientFormComponent } from './components/client.form.component';

import { ProductsComponent } from './components/products.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule,ReactiveFormsModule ],
  declarations: [ AppComponent, 
  HelloComponent, 
  ReportComponent, 
  ClientFormComponent,
  ProductsComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
