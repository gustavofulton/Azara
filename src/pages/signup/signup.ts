import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';

import { TranslateService } from 'ng2-translate/ng2-translate';

import { MainPage } from '../../pages/pages';
import { User } from '../../providers/user';

import { Angular2Apollo } from 'angular2-apollo';
import gql from 'graphql-tag';
/*
  Generated class for the Signup page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: {name: string, email: string, password: string} = {
    name: 'Test Human',
    email: 'test@example.com',
    password: 'test'
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
              public user: User,
              public toastCtrl: ToastController,
              public translateService: TranslateService,
              private apollo: Angular2Apollo) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }
  createUserMutation = gql`
    mutation createUser($email: String!, $password: String!, $name: String!) {
      createUser(authProvider: { email: {email: $email, password: $password}}, name: $name) {
        id
      }
    }
  `;

  loginUserMutation = gql`
      mutation signinUser($email: String!, $password: String!) {
        signinUser( email: {email: $email, password: $password }) {
          token
        }
      }
  `;

  doSignup() {
    // Attempt to login in through our User service
    // this.user.signup(this.account).subscribe((resp) => {
      this.apollo.mutate ({
        mutation: this.createUserMutation,
        variables: {
          email: this.account.email,
          password: this.account.password,
          name: this.account.name
        }
      });
      this.apollo.mutate ({
        mutation: this.loginUserMutation,
        variables: {
          email: this.account.email,
          password: this.account.password
        }
      });

      // this.apollo.mutate ({
      //   mutation: gql`
      //     mutation {
      //       signinUser(email: { email: this.account.email, password: this.account.password, name: this.account.name }) {
      //         id
      //       }
      //     }`
      // });
      this.navCtrl.push(MainPage);
    // }, (err) => {
    //
    //   // this.navCtrl.push(MainPage); // TODO: Remove this when you add your signup endpoint
    //
    //   // Unable to sign up
    //   let toast = this.toastCtrl.create({
    //     message: this.signupErrorString,
    //     duration: 3000,
    //     position: 'top'
    //   });
    //   toast.present();
    // });
  }
}
