import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { SessionList } from '../session-list/session-list';
import { SpeakerList } from '../speaker-list/speaker-list';
import {PhoneDetails} from "../phone-details/phone-details";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = SessionList;
  tab2Root = SpeakerList;
  tab3Root = PhoneDetails;

  constructor() {

  }
}
