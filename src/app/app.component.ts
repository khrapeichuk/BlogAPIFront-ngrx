import { Component, OnInit } from '@angular/core';

import { UserService } from './services/user.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'Blog API';

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.isAuthorized();
    this.isAdmin();
  }

  isAuthorized() {
    return this.userService.isAuthorized();
  }

  isAdmin() {
    return this.userService.isAdmin();
  }
}
