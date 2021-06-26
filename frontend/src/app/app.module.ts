import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSidenavModule } from '@angular/material/sidenav';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import { ServicesComponent } from './pages/services/services.component';
import { CareersComponent } from './pages/careers/careers.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    CareersComponent
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
  ],
  providers: [],
  entryComponents: [HomeComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
