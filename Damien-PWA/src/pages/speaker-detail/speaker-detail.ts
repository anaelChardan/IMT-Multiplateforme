import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import { LocalNotifications } from '@ionic-native/local-notifications';

/**
 * Generated class for the SpeakerDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-speaker-detail',
  templateUrl: 'speaker-detail.html',
})
export class SpeakerDetail {

  private speaker: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private contacts: Contacts,
    private localNotifications: LocalNotifications
  ) {
       this.speaker = this.navParams.get("speaker");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpeakerDetailPage');
  }

  saveContact() {
    const contact: Contact = this.contacts.create();
    const firstName = this.speaker.name.split(" ")[0];
    const lastName = this.removeString(this.speaker.name, firstName);

    contact.name = new ContactName(null, lastName, firstName);
    contact.save().then(
      () => this.localNotifications.schedule({
        color: 'FA845C',
        text: 'Contact Saved!',
      }),
      (error: any) => this.localNotifications.schedule({
        color: 'ABCDEF',
        text: `Error, sorry mate! ${error.msg}`
      })
    )
  }

  private removeString(needle: string, haystack: string): string {
    return haystack.replace(needle, '');
  }
}
