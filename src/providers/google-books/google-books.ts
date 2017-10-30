import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

import { Observable } from "../../../node_modules/rxjs/Observable";

/*
  Generated class for the GoogleBooksProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GoogleBooksProvider {

  constructor(public http: Http) {
    console.log('Hello GoogleBooksProvider Provider');
  }

  getBooksISBN(isbn):Observable<any> {
    var url = 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+encodeURI(isbn);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

  getBooksName(name):Observable<any> {
    var url = 'https://www.googleapis.com/books/v1/volumes?q='+encodeURI(name);
    var response = this.http.get(url).map(res => res.json());
    return response;
  }

}
