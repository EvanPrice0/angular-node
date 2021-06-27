import { Component, Input, OnInit } from '@angular/core';
import { Position } from '../../models/position';

@Component({
  selector: 'reuse-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() position: Position;
  display: {[obj: string]: boolean} = {};

  displayInfo=(i:string): boolean=>{
    if(this.display[i]==undefined){
      console.log(1)
      this.display[i] = true;}
    else{
      console.log(2)
      this.display[i]=!this.display[i]}
    console.log(this.display[i])
    return this.display[i]
  };
}
