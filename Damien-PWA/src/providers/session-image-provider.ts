import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import {Http} from "../utils/http";


/*
  Generated class for the SessionImageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SessionImageProvider {

  private DOMAIN_URL = "https://devfest.gdgnantes.com"

  constructor(private http: Http) {
    console.log('Hello SessionImageProvider Provider');
  }


  getImage(uri: string){
    return this.http.fetchImage(this.DOMAIN_URL + uri)
  }

}
