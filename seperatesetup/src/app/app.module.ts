import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';


import { TextHighlightDirective } from './text-highlight.directive';
import { ShowOnlyIfStartingWithAPipe } from './show-only-if-starting-with-a.pipe';

@NgModule({
  declarations: [
    AppComponent,
   
    TextHighlightDirective,
   
    ShowOnlyIfStartingWithAPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
