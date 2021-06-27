import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import { Router } from '@angular/router';
import { CarouselComponent } from 'src/app/reuse/carousel/carousel.component';
import { TwitterComponent } from 'src/app/svg/twitter/twitter.component';

@Component({
  selector: 'home-nav-to',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends CarouselComponent implements TwitterComponent{
  mobileQuery: MediaQueryList;
  linkedin: string = 'linkedin';
  facebook: string = 'facebook';
  twitter: string = 'twitter';
  private _mobileQueryListener: () => void;

  constructor(public router: Router,changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    super()
    this.mobileQuery = media.matchMedia('(max-width: 100px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  icon: string;

  goBack=()=>{
    this.router.navigate(['..'])
  }
}
