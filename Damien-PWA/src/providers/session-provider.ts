import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";
// import {Http} from "@angular/http";
import {Http} from "../utils/http";
//
/*
  Generated class for the SessionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SessionProvider {

  constructor(public http: Http) {
    console.log('Hello SessionProvider Provider');
  }

  private URI: string = "https://raw.githubusercontent.com/DevInstitut/conference-data/master/sessions.json"

  getAll(): Observable<any>{
    return this.http.get(this.URI).map(provider => {
      console.log("provider", provider);

      return provider;
    })
  }

}
