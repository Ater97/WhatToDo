import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  username: string;

  password: string;

  ngOnInit(): void {
  }

  login(): void {

    if (this.username == 'admin' && this.password == 'admin') {
      this.router.navigate(["question"]);
    } else {
      alert("Invalid credentials");
    }
  }

  signIn(user): void {
    Auth.signIn(user).then(user => {
      console.log(user);
    })
      .catch(err => console.log(err));
  }


  /*
  const_ user = {
    username,
    password
 } */
}

