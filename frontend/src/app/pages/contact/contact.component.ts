import { Component, OnInit } from '@angular/core';
import { Images } from 'src/app/models/images';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  images: Images[] = [
    {
      path:
      [
        'assets/img/nlo.jpg',
        'assets/img/nlolo.jpg',
      ],
      header: 'North Liberty Office',
      body: [
      '710 PACHA PARKWAY, SUITE 1',
      'NORTH LIBERTY, IA 53217',
      '319/359-7808',
      'PROVEN@PRVNInc.com',
      ]},
      {
        path:
        [
          'assets/img/rio.jpg',
          'assets/img/riolo.jpg',
        ],
        header: 'Rock Island Office',
        body: [
        '1617 2nd AVENUE SUITE 110',
        'ROCK ISLAND IL 61201',
        '563/263-5160',
        'PROVEN@PRVNInc.com',
        ]}
  ]

}
