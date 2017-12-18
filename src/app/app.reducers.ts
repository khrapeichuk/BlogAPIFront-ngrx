import { createSelector } from 'reselect';

import * as articleReducer from './reducers/article.reducers';
import * as authenticationReducer from './reducers/authentication.reducers';

export interface AppState {
  article: articleReducer.State;
  authentication: authenticationReducer.State;
}

export const reducers = {
  article: articleReducer.articleReducer,
  authentication: authenticationReducer.authenticationReducer,
};

export const getArticlesState = (state: AppState) => state.article;
export const getAuthenticationState = (state: AppState) => state.authentication;

export const getArticles = createSelector(getArticlesState, articleReducer.getArticles);
export const getSelectedId = createSelector(getArticlesState, articleReducer.getSelectedId);
export const getSelectedArticle = createSelector(getArticlesState, articleReducer.getSelectedArticle);

export const getUser = createSelector(getAuthenticationState, authenticationReducer.getUser);
export const getAccessToken = createSelector(getAuthenticationState, authenticationReducer.getAccessToken);
export const getUserIsLogged = createSelector(getAuthenticationState, authenticationReducer.isLogged);
