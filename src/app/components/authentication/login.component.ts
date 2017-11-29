import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';

import { LocalStorageService } from '../../services/local-storage.service';
import { UserService } from '../../services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['../../app.component.css']
})

export class LoginComponent {
  data: Object;
  currentUser: User;
  user: User;
  error: null;
  loginForm: FormGroup;

  /**
   * LoginComponent constructor
   *
   * @param {FormBuilder} formBuilder
   * @param {UserService} userService
   * @param {LocalStorageService} localStorageService
   * @param {Router} router
   */
  constructor(formBuilder: FormBuilder, private userService: UserService, private localStorageService: LocalStorageService, private router: Router) {
    const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

    this.loginForm = formBuilder.group({
      'email' : [null, Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      'password': [null, Validators.required],
    });
  }

  /**
   * @param {HTMLInputElement} email
   * @param {HTMLInputElement} password
   */
  login(email: HTMLInputElement, password: HTMLInputElement) {
    this.error = null;
    this.userService.login(email, password)
      .subscribe(
        (responseBody) => {
          this.data = responseBody;
          this.currentUser = new User(responseBody.user._id,
                                      responseBody.user.firstname,
                                      responseBody.user.lastname,
                                      responseBody.user.email,
                                      '',
                                      responseBody.token,
                                      responseBody.user.created_at,
                                      responseBody.user.updated_at,
                                      responseBody.user.is_subscribed,
                                      responseBody.user.rights
          );

          this.localStorageService.setObject('currentUser', this.currentUser);

          this.router.navigate(['profile']);
        },
        (error) => this.error = error.json().error
      );
  }
}
