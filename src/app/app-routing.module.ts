import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NavHomeComponent } from './components/nav-home/nav-home.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {path: 'home', component: HomeComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'kontakt', component: KontaktComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
