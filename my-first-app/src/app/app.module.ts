import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ServerComponent } from './server/server.component';
import { Server2Component } from './server2/server2.component';
import { Assignment2Component } from './assignment2/assignment2.component';


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    Server2Component,
    Assignment2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
