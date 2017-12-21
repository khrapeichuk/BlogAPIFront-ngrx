import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { LocalStorageService } from '../../services/local-storage.service';
import { UserService } from '../../services/user.service';

import { User } from '../../models/user.model';

import * as authenticationActions from '../../actions/authentication.actions';
import { authenticationReducer } from '../../reducers/authentication.reducers';

@Component({
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['../../app.component.css']
})

export class LoginComponent {
  authenticatedUser: User;
  loginForm: FormGroup;
  user$: Store<any>;

  /**
   * LoginComponent constructor
   *
   * @param {FormBuilder} formBuilder
   * @param {UserService} userService
   * @param {LocalStorageService} localStorageService
   * @param {Router} router
   * @param {Store<any>} store
   */
  constructor(
    formBuilder: FormBuilder,
    private userService: UserService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private store: Store<any>
  ) {
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
    this.authenticatedUser = new User('',
      '',
      '',
      email.value,
      password.value,
      '',
      '',
      '',
      null,
      ''
    );

    this.store.dispatch(new authenticationActions.Login(this.authenticatedUser));
    // this.user$ = this.store.select(authenticationReducer.getUser);

    this.router.navigate(['profile']);
  }
}
