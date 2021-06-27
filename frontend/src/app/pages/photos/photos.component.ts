import { Component, OnInit } from '@angular/core';
import { Slide } from 'src/app/models/slide';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.scss']
})
export class PhotosComponent {

  slide1: Slide = {
    path: '../../assets/img/arc3d.jpg',
    header: "Arc 3d",
    description: "here is Arc 3d",
    alt: 'Arc 3d'
  }
  slides: Slide[] = [
    {
      path: '../../assets/img/pipes.jpg',
      header: "Pipes",
      description: "here are pipes",
      alt: 'Pipes'
    },
    {
      path: '../../assets/img/boiler.jpg',
      header: "Boiler",
      description: "here is a boiler",
      alt: 'Boiler'
    }
  ]

}
