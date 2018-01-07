import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//3rd party libs
import { NgxPageScrollModule } from 'ngx-page-scroll';
//MyServices
import { ImageService } from './services/image.service';
//My Components
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentMainComponent } from './components/content-main/content-main.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeatureImageComponent } from './components/feature-image/feature-image.component';
import { AboutComponent } from './components/about/about.component';
import { ContentAboutComponent } from './components/content-about/content-about.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContentMainComponent,
    GalleryComponent,
    FooterComponent,
    FeatureImageComponent,
    AboutComponent,
    ContentAboutComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AngularFontAwesomeModule,
    BrowserAnimationsModule,
    NgxPageScrollModule
  ],
  providers: [
    ImageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }