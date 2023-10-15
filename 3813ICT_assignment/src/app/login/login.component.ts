import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  UserName = ""
  Password = ""

  //String Sanitization
  Alert = ["", "Invalid Username", "Invalid Password", "Invalid Username & Password"];
  validation(stirng:number,al:number) {
    let i = stirng;
    while (i--) {
      if ("qwertyuiopasdfghjklzxcvbnm1234567890".includes(this.UserName[i].toLowerCase())) {
        al++; break;
      }
    }
  }

  onSubmit() {
    let al = 0;
    this.validation(this.UserName.length, al)
    this.validation(this.Password.length, al);al = 0;
    if (al) { alert(this.Alert[al]); return; }

    //Existing Account Check
    for (var a = this.appComponent.userName.length; a--;) {
      for (var b = this.appComponent.userName[a].length; b--;) {
        if (this.UserName == this.appComponent.userName[a][b] &&
            this.Password == this.appComponent.password[a][b]) this.goto(a+1)
      }
    }
  }
  goto(user:number) {
    sessionStorage['in'] = user
    this.router.navigateByUrl('')
    window.history.back();
    location.reload()
  }
  constructor(private router: Router,
    private appComponent: AppComponent) { }
  ngOnInit() { }
}
