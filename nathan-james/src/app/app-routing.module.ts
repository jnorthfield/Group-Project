import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './home-page/homepage.component';
import { TourPageComponent } from './tour-page/tour-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MusicTherapyPageComponent } from './music-therapy-page/music-therapy-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';

const routes: Routes = [{
  path: '',
  redirectTo: '/home',
  pathMatch: 'full'
}, {
  path: 'home',
  component: HomepageComponent
}, {
  path: 'shows',
  component: TourPageComponent
}, {
  path: 'about',
  component: AboutPageComponent
}, {
  path: 'music-therapy',
  component: MusicTherapyPageComponent
}, {
  path: 'blog',
  component: BlogPageComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
