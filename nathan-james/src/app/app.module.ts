import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { FormsModule } from '@angular/forms';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { HomepageComponent } from './home-page/homepage.component';
import { TourPageComponent } from './tour-page/tour-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { MusicTherapyPageComponent } from './music-therapy-page/music-therapy-page.component';
import { BlogPageComponent } from './blog-page/blog-page.component';
import { ShowEntryComponent } from './tour-page/show-entry/show-entry.component';
import { IgFeedComponent } from './about-page/ig-feed/ig-feed.component';
import { CommentsComponent } from './blog-page/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    HomepageComponent,
    TourPageComponent,
    AboutPageComponent,
    MusicTherapyPageComponent,
    BlogPageComponent,
    ShowEntryComponent,
    IgFeedComponent,
    CommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
