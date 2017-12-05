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
   * @param user
   *
   * @returns {Observable<any>}
   */
  login(user) {
    return this.APIService.post(this.userUrl + 'login',
      {
        email: user.email,
        password: user.password
      }
    );
  }

  /**
   * @param user
   *
   * @returns {Observable<any>}
   */
  registration(user) {
    return this.APIService.post(this.userUrl,
      {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        password: user.password
      }
    );
  }

  /**
   * @param user
   *
   * @returns {Observable<any>}
   */
  editProfile(user) {
    return this.APIService.put(this.userUrl + user._id,
      {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
        rights: user.rights
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
