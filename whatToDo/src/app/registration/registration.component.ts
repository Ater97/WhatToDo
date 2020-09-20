import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { User } from '../shared/user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  signstatus: string;
  toVerifyEmail: boolean;

  public registrationForm: FormGroup;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.registrationForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, ])
    })
  }
  public hasError = (controlRegister: string, errorRegister: string) =>{
    return this.registrationForm.controls[controlRegister].hasError(errorRegister);
  }

  public register = (FormValue)=> {
    if (this.registrationForm.valid) {
      //createUser
      this.router.navigate(["login"]);
    }
  }
  
  private createUser(user): void {
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

   verifyEmail(userName, verifycode):void{
    Auth.confirmSignUp(userName, verifycode, 
      {forceAliasCreation: true}).then(data => {
            console.log(data)
            this.toVerifyEmail = false;
            this.signstatus = 'signin'
         })
           .catch(err => console.log(err));
   }


}
