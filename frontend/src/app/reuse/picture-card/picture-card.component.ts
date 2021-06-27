import { Component, OnInit, Input } from '@angular/core';
import { Images } from '../../models/images';
@Component({
  selector: 'reuse-picture-card',
  templateUrl: './picture-card.component.html',
  styleUrls: ['./picture-card.component.scss']
})
export class PictureCardComponent {

  @Input() img: Images;


}
