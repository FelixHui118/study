import { Component } from '@angular/core';
import { Star } from './star';
import { StarComponent }  from './component/star.component';

@Component({
  selector: 'my-app',
  template: `
      <div class="moon"></div>

      <star [star]="star"  *ngFor="let star of stars"></star>

     <div class="footer mainBlock">
         <div class="f-Links"> </div>
         <div class="copyRight">
             Copyright &copy; 2011. Design by Felix Hui.
         </div>
         <div id="ftCity2" class="ftCity2"></div>
         <div id="ftCity1" class="ftCity1"></div>
          <star-form [stars]="stars"></star-form>

     </div>
  `,
  styleUrls: ['app/css/app.css'],
   providers: [StarComponent]
})

export class AppComponent  {

  RandomNum(): number {
     return Math.floor(Math.random() * (90 - 15 + 1)) + 15;
  }

  //Default Star
  stars = [
      new Star('Windstorm' , 'hello', this.RandomNum(), this.RandomNum()),
      new Star('Windstorm2' , 'hello', this.RandomNum(), this.RandomNum()),
      new Star('Windstorm3' , 'hello', this.RandomNum(), this.RandomNum()),
      new Star('Windstorm4' , 'hello', this.RandomNum(), this.RandomNum())
  ]

  
}
