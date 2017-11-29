import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: '',
  styleUrls: ['../../app.component.css']
})

export class LogoutComponent implements OnInit {

  /**
   * LogoutComponent constructor
   *
   * @param {Router} router
   */
  constructor(private router: Router) {}

  ngOnInit(): void {
    this.logout();
  }

  logout(): void {
    localStorage.removeItem('currentUser');

    this.router.navigate(['login']);
  }
}
