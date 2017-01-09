import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { StarComponent }  from './component/star.component';

@NgModule({
  imports:      [ BrowserModule ],
  declarations: [ AppComponent, StarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
