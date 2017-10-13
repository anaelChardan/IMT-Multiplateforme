import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SpeakerProvider} from "../../providers/speaker-provider";
import {Observable} from "rxjs/Observable";
import {DevFestImageProvider} from "../../providers/devfest-image-provider";
import {SpeakerDetail} from "../speaker-detail/speaker-detail"

/**
 * Generated class for the speakerList page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-speaker-list',
  templateUrl: 'speaker-list.html',
})
export class SpeakerList {

  private speakerObservable: Observable<any>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private speakerProvider: SpeakerProvider,
              private ImageProvider: DevFestImageProvider) {
    this.speakerObservable = this.speakerProvider.getAll();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SpeakerList');
  }

  speakerSelected(speaker: any) {
    console.log(speaker);
    this.navCtrl.push(SpeakerDetail, { speaker: speaker })    
  }
}
