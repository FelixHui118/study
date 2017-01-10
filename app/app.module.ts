import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';
import { StarComponent }  from './component/star.component';
import { StarFormComponent  }  from './component/star-form.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, StarComponent, StarFormComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
