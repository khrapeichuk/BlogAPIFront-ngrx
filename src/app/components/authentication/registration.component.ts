import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { User } from '../../models/user.model';

import { UserService } from '../../services/user.service';
import { LocalStorageService } from '../../services/local-storage.service';

import * as authenticationActions from '../../actions/authentication.actions';

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['../../app.component.css']
})

export class RegistrationComponent {
  registeredUser: User;
  registrationForm: FormGroup;

  /**
   * RegistrationComponent constructor
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

    this.registrationForm = formBuilder.group({
      'firstname': [null, Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      'lastname': [null, Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])],
      'email': [null, Validators.compose([Validators.required, Validators.pattern(emailRegex)])],
      'password': [null, Validators.required],
    });
  }

  /**
   * @param {HTMLInputElement} firstname
   * @param {HTMLInputElement} lastname
   * @param {HTMLInputElement} email
   * @param {HTMLInputElement} password
   */
  registration(firstname: HTMLInputElement, lastname: HTMLInputElement, email: HTMLInputElement, password: HTMLInputElement) {
    this.registeredUser = new User('',
      firstname.value,
      lastname.value,
      email.value,
      password.value,
      '',
      '',
      '',
      null,
      ''
    );

    this.store.dispatch(new authenticationActions.Register(this.registeredUser));

    this.router.navigate(['profile']);
  }
}
