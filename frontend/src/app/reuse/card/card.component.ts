import { Component, Input, OnInit } from '@angular/core';
import { Position } from '../../models/position';

@Component({
  selector: 'reuse-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input() position: Position;

}
