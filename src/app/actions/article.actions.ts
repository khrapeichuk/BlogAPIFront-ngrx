import { Action } from '@ngrx/store';

import { Article } from '../models/article.model';

export const GET_ARTICLE = 'Get Article';
export const GET_ARTICLE_SUCCESS = 'Get Article Success';
export const GET_ARTICLE_FAIL = 'Get Article Fail';
export const GET_ARTICLES = 'Get Articles';
export const GET_ARTICLES_SUCCESS = 'Get Articles Success';
export const GET_ARTICLES_FAIL = 'Get Articles Fail';
export const CREATE_ARTICLE = 'Create Article';
export const CREATE_ARTICLE_SUCCESS = 'Create Article Success';
export const CREATE_ARTICLE_FAIL = 'Create Article Fail';
export const UPDATE_ARTICLE = 'Update Article';
export const UPDATE_ARTICLE_SUCCESS = 'Update Article Success';
export const UPDATE_ARTICLE_FAIL = 'Update Article Fail';
export const DELETE_ARTICLE = 'Delete Article';
export const DELETE_ARTICLE_SUCCESS = 'Delete Article Success';
export const DELETE_ARTICLE_FAIL = 'Delete Article Fail';

/**
 * Get article
 */
export class GetArticle implements Action {
  readonly type = GET_ARTICLE;

  constructor(public payload: string) {}
}

export class GetArticleSuccess implements Action {
  readonly type = GET_ARTICLE_SUCCESS;

  constructor(public payload: Article) {}
}

export class GetArticleFail implements Action {
  readonly type = GET_ARTICLE_FAIL;

  constructor(public payload: any) {}
}

/**
 * Get articles
 */
export class GetArticles implements Action {
  readonly type = GET_ARTICLES;
}

export class GetArticlesSuccess implements Action {
  readonly type = GET_ARTICLES_SUCCESS;

  constructor(public payload: Article []) {}
}

export class GetArticlesFail implements Action {
  readonly type = GET_ARTICLES_FAIL;

  constructor(public payload: any) {}
}

/**
 * Create article
 */
export class CreateArticle implements Action {
  readonly type = CREATE_ARTICLE;

  constructor(public payload: Article) {}
}

export class CreateArticleSuccess implements Action {
  readonly type = CREATE_ARTICLE_SUCCESS;

  constructor(public payload: Article) {}
}

export class CreateArticleFail implements Action {
  readonly type = CREATE_ARTICLE_FAIL;

  constructor(public payload: any) {}
}

/**
 * Update article
 */
export class UpdateArticle implements Action {
  readonly type = UPDATE_ARTICLE;

  constructor(public payload: Article) {}
}

export class UpdateArticleSuccess implements Action {
  readonly type = UPDATE_ARTICLE_SUCCESS;

  constructor(public payload: Article) {}
}

export class UpdateArticleFail implements Action {
  readonly type = UPDATE_ARTICLE_FAIL;

  constructor(public payload: any) {}
}

/**
 * Delete article
 */
export class DeleteArticle implements Action {
  readonly type = DELETE_ARTICLE;

  constructor(public payload: string) {}
}

export class DeleteArticleSuccess implements Action {
  readonly type = DELETE_ARTICLE_SUCCESS;

  constructor(public payload: string) {}
}

export class DeleteArticleFail implements Action {
  readonly type = DELETE_ARTICLE_FAIL;

  constructor(public payload: any) {}
}

export type ArticleActions =
  | GetArticle
  | GetArticleSuccess
  | GetArticleFail
  | GetArticles
  | GetArticlesSuccess
  | GetArticlesFail
  | CreateArticle
  | CreateArticleSuccess
  | CreateArticleFail
  | UpdateArticle
  | UpdateArticleSuccess
  | UpdateArticleFail
  | DeleteArticle
  | DeleteArticleSuccess
  | DeleteArticleFail;
