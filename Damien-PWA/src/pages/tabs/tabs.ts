import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SessionList } from '../session-list/session-list';
import {PhoneDetails} from "../phone-details/phone-details";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SessionList;
  tab2Root = AboutPage;
  tab3Root = PhoneDetails;

  constructor() {

  }
}
