import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { CarouselComponent } from 'src/app/reuse/carousel/carousel.component';

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
  slides = [
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
