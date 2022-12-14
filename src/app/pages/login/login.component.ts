


import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder } from '@angular/forms'
import { Route, Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  public loginForm!: FormGroup
  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [''],
      password: ['']
    })
  }

  login() {
    this.http.get<any>("http://localhost:3000/signupUsers")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password && a.role == "administrator"
        });
        if (user) {
          alert("Login success");
          this.loginForm.reset();
          this.router.navigate(['dashboard'])
        }
        else {
          alert("user not found")
        }
      }, err => {
        alert("something went wrong")
      }
      )
  }



  Userlogin() {
    this.http.get<any>("http://localhost:3000/signupUsers")
      .subscribe(res => {
        const user = res.find((a: any) => {
          return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password && a.role == "user"
        });
        if (user) {
          alert("Login success");
          this.loginForm.reset();
          this.router.navigate(['userdashboard'])
        }
        else {
          alert("user not found")
        }
      }, err => {
        alert("something went wrong")
      }
      )
  }

}
