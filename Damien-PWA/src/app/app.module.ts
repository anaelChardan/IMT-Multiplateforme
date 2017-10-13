import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SessionList } from '../pages/session-list/session-list';
import {SessionProvider} from "../providers/session-provider";
import {Http} from "../utils/http";
import {SessionImageProvider} from "../providers/session-image-provider";
import {SessionDetail} from "../pages/session-detail/session-detail";
import {PhoneDetails} from "../pages/phone-details/phone-details";
import {Device} from "@ionic-native/device";
import {Network} from "@ionic-native/network";
import {Camera} from "@ionic-native/camera";
import {Gallery} from "../media/Gallery";

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PhoneDetails,
    SessionDetail,
    SessionList
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    PhoneDetails,
    SessionDetail,
    SessionList
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SessionProvider,
    SessionImageProvider,
    Http,
    Device,
    Network,
    Camera,
    Gallery,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
