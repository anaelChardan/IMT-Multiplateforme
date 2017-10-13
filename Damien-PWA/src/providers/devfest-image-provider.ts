import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from "../utils/http";


/*
  Generated class for the DevFestImageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DevFestImageProvider {

  private DOMAIN_URL = "https://devfest.gdgnantes.com"

  constructor(private http: Http) {
    console.log('Hello DevFestImageProvider Provider');
  }

  getImage(uri: string){
    return this.http.fetchImage(this.DOMAIN_URL + uri)
  }
}
