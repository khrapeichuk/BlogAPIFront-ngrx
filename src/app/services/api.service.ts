import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { Observable } from 'rxjs/Rx';

import { LocalStorageService } from './local-storage.service';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class APIService {
  private headers = new Headers({'Content-Type': 'application/json; charset=utf-8'});
  private baseUrl = 'http://localhost:3000/api/v1/';

  /**
   * APIService constructor
   *
   * @param {Http} http
   * @param {LocalStorageService} localStorageService
   */
  constructor(private http: Http, private localStorageService: LocalStorageService) {}

  /**
   * @param UrlPart
   * @returns {Observable<any>}
   */
  get(UrlPart): Observable<any> {
    let UrlParameters = this.convertTokenToUrlParameters();

    return this.http.get(
      this.baseUrl + UrlPart + '?' + UrlParameters,
      {
        headers: this.headers
      }
    )
      .map(res => this.extractData(<any>res))
      .catch(this.handleError.bind(this));
  }

  /**
   * @param UrlPart
   * @param data
   * @returns {Observable<any>}
   */
  post(UrlPart, data): Observable<any> {
    return this.http.post(
      this.baseUrl + UrlPart,
      JSON.stringify(data),
      {
        headers: this.headers
      }
    )
      .map(res => this.extractData(<any>res))
      .catch(this.handleError.bind(this));
  }

  /**
   * @param UrlPart
   * @param data
   * @returns {Observable<any>}
   */
  put(UrlPart, data): Observable<any> {
    let UrlParameters = this.convertTokenToUrlParameters();

    return this.http.put(
      this.baseUrl + UrlPart + '?' + UrlParameters,
      JSON.stringify(data),
      {
        headers: this.headers
      }
    )
    .map(res => this.extractData(<any>res))
    .catch(this.handleError.bind(this));
  }

  /**
   * @param UrlPart
   * @returns {Observable<any>}
   */
  delete(UrlPart): Observable<any> {
    let UrlParameters = this.convertTokenToUrlParameters();

    return this.http.delete(
      this.baseUrl + UrlPart + '?' + UrlParameters,
      {
        headers: this.headers
      }
    )
      .map(res => this.extractData(<any>res))
      .catch(this.handleError.bind(this));
  }

  /**
   * @returns {string}
   */
  private convertTokenToUrlParameters() {
    return '&token' + '=' + encodeURIComponent(this.localStorageService.getParameter('token'));
  }

  /**
   * @param {Response} res
   * @param {boolean} toJSON
   * @returns {any}
   */
  private extractData(res: Response, toJSON: boolean = true) {
    if (!toJSON) {
      return res;
    }

    return res.json() || {};
  }

  /**
   * @param {Response} error
   * @returns {ErrorObservable}
   */
  private handleError(error: Response) {
    console.log(error);

    let err = error.json();

    if (error.status === 403) {
      return Observable.throw({
        status: 'token_expired'
      });
    }
    return Observable.throw(err);
  }
}
