import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { ServicesComponent } from './pages/services/services.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TeamComponent } from './pages/team/team.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { CarouselComponent } from './reuse/carousel/carousel.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { CardComponent } from './reuse/card/card.component'; 
import {MatCardModule} from '@angular/material/card';
import { PictureCardComponent } from './reuse/picture-card/picture-card.component';
import { TwitterComponent } from './svg/twitter/twitter.component';
import { ProfileCardComponent } from './reuse/profile-card/profile-card.component';
import { AdminComponent } from './pages/admin/admin.component'; 
import { HttpClientModule } from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatRippleModule} from '@angular/material/core';
import { SignupComponent } from './pages/signup/signup.component'; 
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    CareersComponent,
    ContactComponent,
    TeamComponent,
    PhotosComponent,
    CarouselComponent,
    WelcomeComponent,
    CardComponent,
    PictureCardComponent,
    TwitterComponent,
    ProfileCardComponent,
    AdminComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    BrowserAnimationsModule,
    MatButtonToggleModule,
    MatListModule,
    MatCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    HttpClientModule,
    MatRippleModule,
    MatFormFieldModule,
  ],
  providers: [],
  entryComponents: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
