import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DetailPage } from '../detail/detail'

import { GoogleBooksProvider } from '../../providers/google-books/google-books';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private isbn:string = '';
  private name:string = '';
  private bookArray:any[];

  constructor(public navCtrl: NavController, private booksProvider: GoogleBooksProvider) {
    this.bookArray = [];
  }


  public getBooksByISBN(bISBN:string) {
    this.isbn = bISBN;

    this.booksProvider.getBooksISBN(this.isbn).subscribe( (result) => {
      this.bookArray = result.items;
    } );
  }

  public getBooksByName(bName:string) {
    this.name = bName;

    this.booksProvider.getBooksName(this.name).subscribe( (result) => {
      this.bookArray = result.items;
    } );
  }

  public goDetail(book:any) {
    this.navCtrl.push(DetailPage, {
      bookArg: book
    });
  }

}
