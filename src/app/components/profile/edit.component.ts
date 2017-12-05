import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../../models/user.model';

import { UserService } from '../../services/user.service';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit.component.html',
  styleUrls: ['../../app.component.css']
})

export class EditProfileComponent implements OnInit {
  data: Object;
  user: User;
  error: null;
  editProfileForm: FormGroup;

  /**
   * EditProfileComponent constructor
   *
   * @param {FormBuilder} formBuilder
   * @param {UserService} userService
   * @param {LocalStorageService} localStorageService
   * @param {Router} router
   */
  constructor(
    formBuilder: FormBuilder,
    private userService: UserService,
    private  localStorageService: LocalStorageService,
    private router: Router
  ) {
    const emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';

    this.editProfileForm = formBuilder.group({
      'firstname': ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(15)])],
      'lastname': ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(15)])],
      'email': ['', Validators.compose([Validators.required, Validators.pattern(emailRegex)])]
    });
  }

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    this.userService.getUserById(this.localStorageService.getParameter('id'))
      .subscribe((responseBody: object) => {
        this.data = responseBody;
    });
  }

  /**
   * @param {HTMLInputElement} firstname
   * @param {HTMLInputElement} lastname
   * @param {HTMLInputElement} email
   * @param {HTMLInputElement} rights
   */
  editProfile(firstname: HTMLInputElement, lastname: HTMLInputElement, email: HTMLInputElement, rights: HTMLInputElement) {
    this.user = new User(this.localStorageService.getParameter('id'),
      firstname.value,
      lastname.value,
      email.value,
      '',
      '',
      '',
      '',
      null,
      ''
    );

    this.error = null;

    this.userService.editProfile(this.user)
      .subscribe((responseBody: object) => {
          this.data = responseBody;

          this.router.navigate(['profile']);
        },
        (error) => this.error = error.json().error
      );
  }
}
