import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = '3813ICT_assignment';
  userName = [[], [], ['super']]
  password = [[], [], ['123']]
  group = [['super']]
  constructor(private router: Router) { }
  ngOnInit() {
    localStorage['suser1.u'] = "super"
    localStorage['suser1.p'] = "123"
    this.userName[2][0] = "super"
    this.password[2][0] = "123"
    if (sessionStorage['in'] == '0') {
      this.router.navigateByUrl('login');
    } else {
      this.router.navigateByUrl('account');
    }
  }
}
