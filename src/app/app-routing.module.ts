import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {AboutComponent} from "./pages/about/about.component";
import {HomeComponent} from "./pages/home/home.component";
import {ContactComponent} from "./pages/contact/contact.component";

export interface MTRoute extends Route {
  name: string,
  enabled: boolean
}

export declare type MTRoutes = MTRoute[];

export const ROUTES: MTRoutes = [
  { path: 'home', component: HomeComponent , name: 'Home', enabled: true },
  { path: 'about-us', component: AboutComponent , name: 'About Us', enabled: true },
  { path: 'contact-us', component: ContactComponent , name: 'Contact Us', enabled: true },
  { path: '**', redirectTo: '/home', name: '', enabled: false }
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
