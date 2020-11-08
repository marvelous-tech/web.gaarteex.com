import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderTopComponent} from './common/header/header-top/header-top.component';
import {HeaderComponent} from './common/header/header.component';
import {FooterComponent} from './common/footer/footer.component';
import {FooterFeatureComponent} from './common/footer/footer-feature/footer-feature.component';
import {AboutComponent} from './pages/about/about.component';
import {ContactComponent} from './pages/contact/contact.component';
import {TeamComponent} from './pages/team/team.component';
import {HomeComponent} from './pages/home/home.component';

import {AnimateOnScrollModule} from 'ng2-animate-on-scroll';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {OwlModule} from "ngx-owl-carousel";
import {CountoModule} from "angular2-counto";

@NgModule({
  declarations: [
    AppComponent,
    HeaderTopComponent,
    HeaderComponent,
    FooterComponent,
    FooterFeatureComponent,
    AboutComponent,
    ContactComponent,
    TeamComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AnimateOnScrollModule.forRoot(),
    OwlModule,
    CountoModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
