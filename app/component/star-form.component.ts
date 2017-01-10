import { Component, Input } from '@angular/core';
import { Star } from '../star';
import { AppComponent }  from '../app.component';

@Component({
  moduleId: module.id,
  selector: 'star-form',
  template: `
  <div class="msgblock">
      <div class="btnsay"  (click)="msgBlocktoggle()" >&nbsp;</div>
      <div id="inputMsgBlock" class="inputMsgBlock animate-show" [hidden]="!showMsg">
          <a class="btnclose" (click)="msgBlocktoggle()" >x</a>
          <form (ngSubmit)="onSubmit(model)" #starForm="ngForm">
          <input id="inputName" class="gray" type="text" [(ngModel)]="model.name" name="name" placeholder="路人甲" />
          <input id="inputMsg"   class="gray" type="text"  [(ngModel)]="model.message" name="message" placeholder="中秋節快樂!" />
          <button id="submit" type="submit" [disabled]="!starForm.form.valid">Submit</button>
          </form>
      </div>
  </div>
  `,
   styleUrls: ['../css/star-form.css'],
})

export class StarFormComponent {
    @Input('stars') stars:Object[];
    constructor(private app:AppComponent) {

    }
  model = {};

  submitted = false;
  onSubmit(msg:{name?:string, message?:string}) {

      this.submitted = true;
      this.newStar(msg.name, msg.message);
   }
  // TODO: Remove this when we're done
  //get diagnostic() { return JSON.stringify(this.model); }

  showMsg = false
  //    constructor(private sc: StarComponent) {}

  msgBlocktoggle():void{
      this.showMsg = !this.showMsg
      //this.newStar('felix','fefefe');
  }

  newStar( name:string,  message:string): void{
      this.stars.push(
         new Star(name , message, this.app.RandomNum(), this.app.RandomNum())
      )
  }
}
