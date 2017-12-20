import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { UserService } from '../services/user.service';
import * as AuthenticationActions from '../actions/authentication.actions';

@Injectable()
export class AuthenticationEffects {
  constructor(private userService: UserService, private actions$: Actions) {}

  @Effect()
  login$: Observable<Action> = this.actions$
    .ofType(AuthenticationActions.LOGIN)
    .map((action: AuthenticationActions.Login) => action.payload)
    .switchMap(user => this.userService.login(user)
      .map(result => new AuthenticationActions.LoginSuccess(result))
      .catch(error => of(new AuthenticationActions.LoginFail(error)))
    );

  @Effect()
  register$: Observable<Action> = this.actions$
    .ofType(AuthenticationActions.REGISTER)
    .map((action: AuthenticationActions.Register) => action.payload)
    .switchMap(user => this.userService.registration(user)
      .map(result => new AuthenticationActions.RegisterSuccess(result))
      .catch(error => of(new AuthenticationActions.RegisterFail(error)))
    );
}
