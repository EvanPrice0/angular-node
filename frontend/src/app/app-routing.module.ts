import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent, children: [
    { path: 'services', component: ServicesComponent },
    { path: 'careers', component: CareersComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'photos', component: PhotosComponent },
    { path: 'team', component: TeamComponent }

  ]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
