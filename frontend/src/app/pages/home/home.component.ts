import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { CarouselComponent } from 'src/app/reuse/carousel/carousel.component';
import { Slide } from 'src/app/models/slide';

@Component({
  selector: 'home-nav-to',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends CarouselComponent{
  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;

  constructor(public router: Router,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    super()
    this.mobileQuery = media.matchMedia('(max-width: 100px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  slide1:Slide = {
    path: '../../assets/img/arc3d.jpg',
    header: "Arc 3d",
    description: "here is Arc 3d",
    alt: 'Arc 3d'
  }
  slides:Slide[] = [
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
  goBack=()=>{
    this.router.navigate(['..'])
  }
}
