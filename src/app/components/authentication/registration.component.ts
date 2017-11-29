import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';

import { UserService } from '../../services/user.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-registration',
  templateUrl: 'registration.component.html',
  styleUrls: ['../../app.component.css']
})

export class RegistrationComponent {
  data: Object;
  currentUser: User;
  user: User;
  error: string;
  registrationForm: FormGroup;

  /**
   * RegistrationComponent constructor
   *
   * @param {FormBuilder} formBuilder
   * @param {UserService} userService
   * @param {LocalStorageService} localStorageService
   * @param {Router} router
   */
  constructor(formBuilder: FormBuilder, private userService: UserService, private localStorageService: LocalStorageService, private router: Router) {
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
    this.error = null;
    this.userService.registration(firstname, lastname, email, password)
      .subscribe(
        (responseBody) => {
          this.data = responseBody;
          this.currentUser = new User
          (
            responseBody.user._id,
            responseBody.user.firstname,
            responseBody.user.lastname,
            responseBody.user.email,
            responseBody.user.password,
            responseBody.token,
            '',
            '',
            null,
            ''
          );

          this.localStorageService.setObject('currentUser', this.currentUser);

          this.router.navigate(['profile']);
        },
        (error) => this.error = error.json().error
      );
  }
}
