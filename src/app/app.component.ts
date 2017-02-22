import { Component, ViewChild } from '@angular/core';
import {Platform, Nav, Config} from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { Settings } from '../providers/providers';

import { FirstRunPage } from '../pages/pages';
import { CardsPage } from '../pages/cards/cards';
import { ContentPage } from '../pages/content/content';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';
import { SignupPage } from '../pages/signup/signup';
import { TabsPage } from '../pages/tabs/tabs';
import { TutorialPage } from '../pages/tutorial/tutorial';
import { WelcomePage } from '../pages/welcome/welcome';
import { ListMasterPage } from '../pages/list-master/list-master';
import { SettingsPage } from '../pages/settings/settings';
import { SearchPage } from '../pages/search/search';
import { ProfilePage } from '../pages/profile/profile';
import { MessagingPage } from '../pages/messaging/messaging';
import { MessagesPage } from '../pages/messages/messages';
import { CalendarPage } from '../pages/calendar/calendar';

import { TranslateService } from 'ng2-translate/ng2-translate';

import { Angular2Apollo } from 'angular2-apollo';
import gql from 'graphql-tag';

@Component({
  template: `<ion-menu [content]="content">
    <ion-header>
      <ion-toolbar>
        <ion-title>Pages</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-list>
        <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage: any;

  currentUser = <any>{};

  @ViewChild(Nav) nav: Nav;

  pages: any[] = [
    { title: 'Tutorial', component: TutorialPage },
    { title: 'Welcome', component: WelcomePage },
    { title: 'Tabs', component: TabsPage },
    { title: 'Cards', component: CardsPage },
    { title: 'Content', component: ContentPage },
    { title: 'Login', component: LoginPage },
    { title: 'Signup', component: SignupPage },
    { title: 'Map', component: MapPage },
    { title: 'Master Detail', component: ListMasterPage },
    { title: 'Settings', component: SettingsPage },
    { title: 'Search', component: SearchPage },
    { title: 'Profile', component: ProfilePage },
    { title: 'Messaging', component: MessagingPage },
    { title: 'Messages', component: MessagesPage},
    { title: 'Calendar', component: CalendarPage }
  ]

  constructor(translate: TranslateService, platform: Platform, settings: Settings, config: Config, private apollo: Angular2Apollo) {
    // Set the default language for translation strings, and the current language.
    translate.setDefaultLang('en');
    translate.use('en')

    translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });

    this.currentUserInfo().then(({data}) => {
      this.currentUser = data;
      this.currentUser = this.currentUser.user;
      if (this.currentUser == null) {
        this.rootPage = WelcomePage;
      } else {
        this.rootPage = TabsPage;
      }
      console.log(this.currentUser);

    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }



 currentUserInfo(){
   return this.apollo.query({
     query: gql`
       query{
         user{
           id
           email
           name
         }
       }
     `
   }).toPromise();
 }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
