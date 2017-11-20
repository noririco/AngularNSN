import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { HomeComponent } from './components/home/home.component';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentMainComponent } from './components/content-main/content-main.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { FooterComponent } from './components/footer/footer.component';
import { FeatureImageComponent } from './components/feature-image/feature-image.component';
import { AboutComponent } from './components/about/about.component';
import { BgImageComponent } from './components/bg-image/bg-image.component';
import { ContentAboutComponent } from './components/content-about/content-about.component';

// 3rd party libs


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BarChartComponent,
    HeaderComponent,
    ContentMainComponent,
    GalleryComponent,
    FooterComponent,
    FeatureImageComponent,
    AboutComponent,
    BgImageComponent,
    ContentAboutComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    AngularFontAwesomeModule 
  ],
  providers: [
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }