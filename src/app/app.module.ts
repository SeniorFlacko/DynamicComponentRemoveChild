import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
  ],
  entryComponents: [
    ChildComponent
  ],
  declarations: [
    AppComponent, 
    ParentComponent, 
    ChildComponent
    ],

  bootstrap: [AppComponent]
})
export class AppModule { }
