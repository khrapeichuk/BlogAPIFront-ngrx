import * as AuthenticationActions from '../actions/authentication.actions';
import { User } from '../models/user.model';

export interface State {
  isLogged: boolean;
  accessToken: string | null;
  user: User;
}

const initialState: State = {
  isLogged: false,
  accessToken: null,
  user: null,
};

export function authenticationReducer(state = initialState, action: AuthenticationActions.AuthenticationActions): State {
  switch (action.type) {
    case AuthenticationActions.LOGIN: {
      return {
        ...state,
        isLogged: false,
        accessToken: '',
        user: null,
      };
    }

    case AuthenticationActions.LOGIN_SUCCESS: {
      return {
        ...state,
        isLogged: true,
        accessToken: action.payload.token,
        user: action.payload.user,
      };
    }

    case AuthenticationActions.LOGIN_FAIL: {
      return {
        ...state,
        isLogged: false,
        accessToken: null,
        user: null,
      };
    }

    case AuthenticationActions.LOGOUT: {
      return {
        ...state,
        isLogged: true,
        accessToken: action.payload.token,
        user: null,
      };
    }

    case AuthenticationActions.LOGOUT_SUCCESS: {
      return {
        ...state,
        isLogged: false,
        accessToken: null,
        user: null,
      };
    }

    case AuthenticationActions.LOGOUT_FAIL: {
      return {
        ...state,
        isLogged: true,
        accessToken: action.payload.token,
        user: null,
      };
    }

    case AuthenticationActions.REGISTER: {
      return {
        ...state,
        isLogged: false,
        accessToken: null,
        user: null,
      };
    }

    case AuthenticationActions.REGISTER_SUCCESS: {
      return {
        ...state,
        isLogged: true,
        accessToken: action.payload.token,
        user: null,
      };
    }

    case AuthenticationActions.REGISTER_FAIL: {
      return {
        ...state,
        isLogged: false,
        accessToken: null,
        user: null,
      };
    }
    default: {
      return state;
    }
  }
}

export const isLogged = (state: State) => state.isLogged;
export const getAccessToken = (state: State) => state.accessToken;
export const getUser = (state: State) => state.user;
