import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {Gallery} from "../../media/Gallery";

/**
 * Generated class for the SessionDetail page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@Component({
  selector: 'page-session-detail',
  templateUrl: 'session-detail.html',
})
export class SessionDetail {

  private session: any

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private gallery: Gallery) {
    this.session = this.navParams.get("session")
  }

  pickupPictureFromGallery() {
    this.gallery.pickFromGallery()
      .then(pictUrl => {
        console.log("pictUrl", pictUrl)
      })
      .catch(error => {
        console.log("Error while fetching pict. from gallery", error)
      })
  }

  takeAndSaveAPicture() {
    this.gallery.takePicture()
      .then(pictUrl => {
        console.log("pictUrl", pictUrl)
      })
      .catch(error => {
        console.log("Error while opening camera", error)
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SessionDetail');
  }

}
