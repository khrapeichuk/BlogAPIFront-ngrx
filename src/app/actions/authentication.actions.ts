import { Action } from '@ngrx/store';

import { User } from '../models/user.model';

export const LOGIN = 'Login';
export const LOGIN_SUCCESS = 'Login Success';
export const LOGIN_FAIL = 'Login Fail';

export const LOGOUT = 'Logout';
export const LOGOUT_SUCCESS = 'Logout Success';
export const LOGOUT_FAIL = 'Logout Fail';

export const REGISTER = 'Register';
export const REGISTER_SUCCESS = 'Register Success';
export const REGISTER_FAIL = 'Register Fail';

/**
 * Login
 */
export class Login implements Action {
  readonly type = LOGIN;

  constructor(public payload: User) {}
}

export class LoginSuccess implements Action {
  readonly type = LOGIN_SUCCESS;

  constructor(public payload: any) {}
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;

  constructor(public payload: any) {}
}

/**
 * Logout
 */
export class Logout implements Action {
  readonly type = LOGOUT;

  constructor(public payload: any) {}
}

export class LogoutSuccess implements Action {
  readonly type = LOGOUT_SUCCESS;

  constructor(public payload: any) {}
}

export class LogoutFail implements Action {
  readonly type = LOGOUT_FAIL;

  constructor(public payload: any) {}
}

/**
 * Register
 */
export class Register implements Action {
  readonly type = REGISTER;

  constructor(public payload: User) {}
}

export class RegisterSuccess implements Action {
  readonly type = REGISTER_SUCCESS;

  constructor(public payload: any) {}
}

export class RegisterFail implements Action {
  readonly type = REGISTER_FAIL;

  constructor(public payload: any) {}
}

export type AuthenticationActions =
  | Login
  | LoginSuccess
  | LoginFail
  | Logout
  | LogoutSuccess
  | LogoutFail
  | Register
  | RegisterSuccess
  | RegisterFail;
