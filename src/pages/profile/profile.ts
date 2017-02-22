import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SettingsPage } from '../settings/settings';
import ApolloClient, { createNetworkInterface } from 'apollo-client';
import { Angular2Apollo } from 'angular2-apollo';
import gql from 'graphql-tag';
import {Subscription} from 'rxjs/Subscription';



/*
  Generated class for the Profile page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {
  currentUser = <any>{};
  loading: boolean;
  // user: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, private apollo: Angular2Apollo) {

  }
  ngOnInit() {
    this.currentUserInfo().then(({data}) => {
      this.currentUser = data;
      this.currentUser = this.currentUser.user;
      console.log(this.currentUser);
    })
  //  this.currentUser = this.apollo.query({
  //    query: gql`
  //      query{
  //        user{
  //          id
  //          email
  //          name
  //        }
  //      }
  //    `
  //  }).toPromise();
  //  console.log(this.currentUser);
 }

 currentUserInfo(){
   return this.apollo.query({
     query: gql`
       query{
         user{
           id
           email
           name
         }
       }
     `
   }).toPromise();
 }
    //    query: CurrentUser
    //  }).subscribe(({data}) => {
    //   // this.loading = data.loading;
    //   this.currentUser = data.user;
    //   console.log(this.currentUser);
    // })
    // console.log(this.currentUser);
    // this.apollo.watchQuery({
    //   query: CurrentUser
    // }).subscribe(({data}) => {
    //   this.currentUser = data.user;
    // })
  // }

  goSettings() {
    this.navCtrl.push(SettingsPage);
  }

}
