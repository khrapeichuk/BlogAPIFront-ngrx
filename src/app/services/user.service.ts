import { Injectable } from '@angular/core';

import 'rxjs/add/operator/toPromise';

import { APIService } from './api.service';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class UserService {
  private userUrl = 'users/';

  /**
   * UserService constructor
   *
   * @param {LocalStorageService} localStorageService
   * @param {APIService} APIService
   */
  constructor(private localStorageService: LocalStorageService, private APIService: APIService) { }

  /**
   * @param {string} id
   * @returns {Observable<any>}
   */
  getUserById(id: string) {
    return this.APIService.get(this.userUrl + id);
  }

  /**
   * @returns {Observable<any>}
   */
  getAllUsers() {
    return this.APIService.get(this.userUrl);
  }

  /**
   * @param email
   * @param password
   * @returns {Observable<any>}
   */
  login(email, password) {
    return this.APIService.post(this.userUrl + 'login',
      {
        email: email.value,
        password: password.value
      }
    );
  }

  /**
   * @param firstname
   * @param lastname
   * @param email
   * @param password
   * @returns {Observable<any>}
   */
  registration(firstname, lastname, email, password) {
    return this.APIService.post(this.userUrl,
      {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        password: password.value
      }
    );
  }

  /**
   * @param id
   * @param firstname
   * @param lastname
   * @param email
   * @param rights
   * @returns {Observable<any>}
   */
  editProfile(id, firstname, lastname, email, rights) {
    return this.APIService.put(this.userUrl + id,
      {
        firstname: firstname.value,
        lastname: lastname.value,
        email: email.value,
        rights: rights.split(',')
      }
    );
  }

  /**
   * @param {string} id
   * @returns {Promise<never | any>}
   */
  deleteUser(id: string) {
    return this.APIService.delete(this.userUrl + id)
      .toPromise()
      .then(() => null)
      .catch(() => null);
  }

  /**
   * @returns {any}
   */
  getCurrentUserID() {
    if (this.isAuthorized()) {
      return this.localStorageService.getParameter('id');
    }
  }

  /**
   * @returns {boolean}
   */
  isAuthorized() {
    if (this.localStorageService.getObject('currentUser')) {
      return true;
    }
  }

  /**
   * @returns {boolean}
   */
  isAdmin() {
    if (this.isAuthorized()) {
      let rights = this.localStorageService.getParameter('rights');

      if (rights.indexOf('ADMIN') !== -1) {
        return true;
      }
    }
  }

  /**
   * @param authorID
   * @returns {boolean}
   */
  isArticleOrCommentAuthor(authorID) {
    if (this.getCurrentUserID() === authorID) {
      return true;
    }
  }
}
