import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detail',
  templateUrl: 'detail.html',
})
export class DetailPage {

  book:any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.book = navParams.get('bookArg');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailPage');
  }

  

}
