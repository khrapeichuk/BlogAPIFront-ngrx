import { ActionReducerMap } from '@ngrx/store';

import * as articleReducer from './reducers/article.reducers';

export interface AppState {
  article: articleReducer.State;
}

export const reducers: ActionReducerMap<AppState> = {
  article: articleReducer.articleReducer
};
