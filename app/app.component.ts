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
         <div class="msgblock">
             <div class="btnsay"  (click)="msgBlocktoggle()" >&nbsp;</div>
             <div id="inputMsgBlock" class="inputMsgBlock animate-show" [hidden]="!showMsg">
                 <a class="btnclose" (click)="msgBlocktoggle()" >x</a>
                 <input id="inputName" class="gray" type="text" placeholder="路人甲asdasd" />
                 <input id="inputMsg"   class="gray" type="text"  placeholder="中秋節快樂!" />
                 <input type="button"  id="submit" value="submit"  />
             </div>
         </div>
     </div>
  `,
  styleUrls: ['app/css/star.css'],
   providers: [StarComponent]
})

export class AppComponent  {
    showMsg = false
//    constructor(private sc: StarComponent) {}

    msgBlocktoggle():void{
        this.showMsg = !this.showMsg
        //this.newStar('felix','fefefe');
    }


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

  newStar( name:string,  message:string): void{
      this.stars.push(
          new Star(name , message, this.RandomNum(), this.RandomNum())
      )
      console.warn(this.stars);
  }
}
