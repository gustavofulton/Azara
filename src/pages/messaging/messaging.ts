import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/*
  Generated class for the Messaging page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-messaging',
  templateUrl: 'messaging.html'
})
export class MessagingPage {
  message = "";
  messages = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  sendMessage(message) {
    this.messages.push(message);
    this.message="";
  }

}
