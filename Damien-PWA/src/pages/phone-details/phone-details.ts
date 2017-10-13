import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import { Device } from '@ionic-native/device';
import {Network} from "@ionic-native/network";
/**
 * Generated class for the PhoneDetails page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-phone-details',
  templateUrl: 'phone-details.html',
})
export class PhoneDetails {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private device: Device,
              private network: Network) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PhoneDetails');
  }

}
