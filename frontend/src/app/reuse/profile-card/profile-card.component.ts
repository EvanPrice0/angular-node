import { Component, Input, OnInit } from '@angular/core';
import { Images } from 'src/app/models/images';

@Component({
  selector: 'reuse-profile-card',
  templateUrl: './profile-card.component.html',
  styleUrls: ['./profile-card.component.scss']
})
export class ProfileCardComponent{

  @Input() img: Images;


}
