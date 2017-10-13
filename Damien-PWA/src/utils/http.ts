

import {Injectable} from "@angular/core";
import { Observable } from "rxjs/Observable";
import 'rxjs/add/observable/fromPromise';
import "rxjs/add/operator/mergeMap";

@Injectable()
export class Http {

  private GET = "GET"

  private handleRequest<T>(eventualResponse: Observable<Response>,
                           extractor: (Response) => Promise<T>): Observable<T> {
    return eventualResponse
      .flatMap(response => {
        if(! response.ok){
          // TODO : EVIL -> Impure
          throw new Error(`API returned non 2xx (${response.status})`)
        }
        return Observable.fromPromise(extractor(response));
      })
      .map(response => (<any>Object).values(response))
  }

  private request(url: string, method: string){
    return this.handleRequest(
      Observable.fromPromise(fetch(url, {
          method: method
        })
      ),
      response => response.json()
    )
  }

  private requestBlob(url: string, method: string){
    return this.handleRequest(
      Observable.fromPromise(fetch(url, {
          method: method
        })
      ),
      response => response.blob()
    )
  }


  get(url: string): Observable<any>{
    return this.request(url, this.GET)
  }

  fetchImage(url: string): Observable<Blob>{
    return this.requestBlob(url, this.GET)
  }

}
