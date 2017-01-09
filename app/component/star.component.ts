import { Component, Input} from '@angular/core';
import { Star } from '../star';

@Component({
  selector: 'star',
  template:`
      <div  group="1"  class="star" style="display:block;" style.top="{{star.x}}%" style.left="{{star.y}}%">
          <div style="position:relative">
              <div class="msgbox  leftSide" ><span class="name">{{ star.name }} : </span><span class="msg">{{ star.message }} </span></div>
                  <figure class="star-img"></figure>
          </div>
      </div>
  `,
  styleUrls: ['app/css/star.css']
})

export class StarComponent {
    @Input() star:Object;
}
