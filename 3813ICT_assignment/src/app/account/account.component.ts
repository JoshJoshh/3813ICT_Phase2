import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  perm = ""
  UserName = ""
  Password = ""
  Prmissin = 0
  push = 0
  createUser() {
    if (this.UserName && this.Password) {
      for (var a = this.appComponent.userName.length; a--;) {
        for (var b = this.appComponent.userName[a].length; b--;) {
          if (this.UserName == this.appComponent.userName[a][b]) {
            this.push = 1
          }
        }
      }
      if (!this.push) {
        this.appComponent.userName[this.Prmissin][
          this.appComponent.userName[this.Prmissin].length] = this.UserName
        this.appComponent.password[this.Prmissin][
          this.appComponent.password[this.Prmissin].length] = this.Password
        this.UserName = ""
        this.Password = ""
        this.Prmissin = 0
      }
      this.push = 0
    }
  }
  deleteUser() {
    if (this.UserName && this.Password) {
      for (var a = this.appComponent.userName.length; a--;) {
        for (var b = this.appComponent.userName[a].length; b--;) {
          if (this.UserName == this.appComponent.userName[a][b]) {
            this.appComponent.userName[a].splice(b, 1)
            this.appComponent.password[a].splice(b, 1)
          }
        }
      }
    }
  }
  logOut() {
    sessionStorage['in'] = 0
    window.history.back()
    window.history.back()
    location.reload()
  }
  constructor(private router: Router,
    private appComponent: AppComponent) { }
  ngOnInit() {
    if (sessionStorage['in'] == 1) {
      this.perm = "display:none"
    }
    if (sessionStorage['in'] == 2) {
      this.perm = "display:inline"
    }
    if (sessionStorage['in'] == 3) {
      this.perm = "display:inline"
    }
  }
}
