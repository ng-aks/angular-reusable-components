import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgAksFormsModule } from 'projects/ng-aks-forms/src/public-api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgAksFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
