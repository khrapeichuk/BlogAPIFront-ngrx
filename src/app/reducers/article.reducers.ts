import { createSelector } from 'reselect';

import * as ArticleActions from '../actions/article.actions';
import { Article } from '../models/article.model';

export interface State {
  id: string | null;
  articles: Article[];
}

const initialState: State = {
  id: null,
  articles: []
};

export function articleReducer(state = initialState, action: ArticleActions.ArticleActions): State {
  switch (action.type) {
    case ArticleActions.GET_ARTICLE: {
      return {
        ...state,
        id: action.payload,
      };
    }

    case ArticleActions.GET_ARTICLE_SUCCESS: {
      return {
        ...state,
        articles: [action.payload],
      };
    }

    case ArticleActions.GET_ARTICLES: {
      return {
        ...state,
        id: null,
      };
    }

    case ArticleActions.GET_ARTICLES_SUCCESS: {
      return {
        ...state,
        articles: action.payload,
      };
    }

    case ArticleActions.CREATE_ARTICLE: {
      return {
        ...state,
        articles: [action.payload],
      };
    }

    case ArticleActions.UPDATE_ARTICLE: {
      return {
        ...state,
        articles: [action.payload],
      };
    }

    case ArticleActions.DELETE_ARTICLE: {
      return {
        ...state,
        id: action.payload,
      };
    }

    case ArticleActions.DELETE_ARTICLE_SUCCESS: {
      return {
        ...state,
        articles: [action.payload],
      };
    }

    default: {
      return state;
    }
  }
}

export const getSelectedId = (state: State) => state.id;
export const getArticles = (state: State) => state.articles;

export const getSelectedArticle = createSelector(getArticles, getSelectedId, (articles, selectedId) => {
  return articles.find(function(article: Article) {
    return article._id === selectedId;
  });
});
