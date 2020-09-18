import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  signstatus: string;
  toVerifyEmail: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  register(): void {

  }

  createUser(user): void {
    Auth.signUp(user)
      .then(data => {
        console.log(data);
        this.toVerifyEmail = true;
        this.signstatus = '';
      })
      .catch(err => console.log(err));
  }

  /**
    const user = {
   username,
   password,
   attributes: {
        email,
        phone_number
        // other custom attributes
      }
    }
   */

  verifyEmail(userName, verifycode): void {
    Auth.confirmSignUp(userName, verifycode,
      { forceAliasCreation: true }).then(data => {
        console.log(data)
        this.toVerifyEmail = false;
        this.signstatus = 'signin'
      })
      .catch(err => console.log(err));
  }

}
