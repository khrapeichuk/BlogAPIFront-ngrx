import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from '../../services/local-storage.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './index.component.html',
  styleUrls: ['../../app.component.css']
})

export class ProfileComponent implements OnInit {
  data: Object;

  /**
   * ProfileComponent constructor
   *
   * @param {UserService} userService
   * @param {LocalStorageService} localStorageService
   */
  constructor(private userService: UserService, private localStorageService: LocalStorageService) {}

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById() {
    this.userService.getUserById(this.localStorageService.getParameter('id'))
      .subscribe((responseBody: object) => {
        this.data = responseBody;
    });
  }
}
