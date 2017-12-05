import * as ArticleActions from '../actions/article.actions';

export interface State {
  id: string | null;
  article: object | null;
}

const initialState: State = {
  id: null,
  article: null,
};

export function articleReducer(state = initialState, action: ArticleActions.ArticleActions): State {
  switch (action.type) {
    case ArticleActions.GET_ARTICLE: {
      return {
        ...state,
        article: action.payload,
      };
    }

    case ArticleActions.GET_ARTICLES: {
      return {
        ...state,
      };
    }

    case ArticleActions.CREATE_ARTICLE: {
      return {
        ...state,
        article: action.payload,
      };
    }

    case ArticleActions.UPDATE_ARTICLE: {
      return {
        ...state,
        article: action.payload,
      };
    }

    case ArticleActions.DELETE_ARTICLE: {
      return {
        ...state,
        id: action.payload,
      };
    }

    default: {
      return state;
    }
  }
}
