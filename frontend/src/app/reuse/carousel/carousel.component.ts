import { Component, Input, OnInit } from '@angular/core';
import { Slide } from '../../models/slide';
@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent{

  @Input() slide1: Slide;
  @Input() slides: Slide[];

}
