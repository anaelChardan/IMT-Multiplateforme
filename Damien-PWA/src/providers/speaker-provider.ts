import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
import {Http} from "../utils/http";

/*
  Generated class for the SpeakerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpeakerProvider {

  constructor(public http: Http) {
    console.log('Hello SpeakerProvider Provider');
  }

  private URI: string = "https://raw.githubusercontent.com/DevInstitut/conference-data/master/speakers.json"

  getAll(): Observable<any>{
    return this.http.get(this.URI).map(provider => {
      console.log("provider", provider);

      return provider;
    })
  }

}
