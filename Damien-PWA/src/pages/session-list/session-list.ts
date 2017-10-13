import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {SessionProvider} from "../../providers/session-provider";
import {Observable} from "rxjs/Observable";
import {DevFestImageProvider} from "../../providers/devfest-image-provider";
import {SessionDetail} from "../session-detail/session-detail";

/**
 * Generated class for the SessionList page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-session-list',
  templateUrl: 'session-list.html',
})
export class SessionList {

  private sessionObservable: Observable<any>;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private sessionProvider: SessionProvider,
              private DevFestImageProvider: DevFestImageProvider) {
    this.sessionObservable = this.sessionProvider.getAll();
    // this.sessionObservable = this.sessionObservable.flatMap(session => {
    //   return this.DevFestImageProvider.getImage(session.image || "/images/backgrounds/opening.jpg").map(blob => {
    //     session.imageData = blob;
    //     return session;
    //   })
    // })
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SessionList');
  }

  sessionSelected(session: any){
    console.log(session)
    this.navCtrl.push(SessionDetail, { session: session })
  }
}
