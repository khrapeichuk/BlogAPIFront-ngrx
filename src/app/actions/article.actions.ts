import { Action } from '@ngrx/store';

export const GET_ARTICLE = 'Get Article';
export const GET_ARTICLE_SUCCESS = 'Get Article Success';
export const GET_ARTICLE_FAIL = 'Get Article Fail';
export const GET_ARTICLES = 'Get Articles';
export const GET_ARTICLES_SUCCESS = 'Get Articles Success';
export const GET_ARTICLES_FAIL = 'Get Articles Fail';
export const CREATE_ARTICLE = 'Create Article';
export const CREATE_ARTICLES_SUCCESS = 'Create Articles Success';
export const CREATE_ARTICLES_FAIL = 'Create Articles Fail';
export const UPDATE_ARTICLE = 'Update Article';
export const UPDATE_ARTICLES_SUCCESS = 'Update Articles Success';
export const UPDATE_ARTICLES_FAIL = 'Update Articles Fail';
export const DELETE_ARTICLE = 'Delete Article';
export const DELETE_ARTICLES_SUCCESS = 'Delete Articles Success';
export const DELETE_ARTICLES_FAIL = 'Delete Articles Fail';

/**
 * Get article
 */
export class GetArticle implements Action {
  readonly type = GET_ARTICLE;

  constructor(public payload: object) {}
}

export class GetArticleSuccess implements Action {
  readonly type = GET_ARTICLE_SUCCESS;

  constructor(public payload: object) {}
}

export class GetArticleFail implements Action {
  readonly type = GET_ARTICLE_FAIL;

  constructor(public payload: string) {}
}

/**
 * Get articles
 */
export class GetArticles implements Action {
  readonly type = GET_ARTICLES;
}

export class GetArticlesSuccess implements Action {
  readonly type = GET_ARTICLES_SUCCESS;
}

export class GetArticlesFail implements Action {
  readonly type = GET_ARTICLES_FAIL;
}

/**
 * Create article
 */
export class CreateArticle implements Action {
  readonly type = CREATE_ARTICLE;

  constructor(public payload: object) {}
}

export class CreateArticleSuccess implements Action {
  readonly type = CREATE_ARTICLES_SUCCESS;

  constructor(public payload: object) {}
}

export class CreateArticleFail implements Action {
  readonly type = CREATE_ARTICLES_FAIL;

  constructor(public payload: string) {}
}

/**
 * Update article
 */
export class UpdateArticle implements Action {
  readonly type = UPDATE_ARTICLE;

  constructor(public payload: object) {}
}

export class UpdateArticleSuccess implements Action {
  readonly type = UPDATE_ARTICLES_SUCCESS;

  constructor(public payload: object) {}
}

export class UpdateArticleFail implements Action {
  readonly type = UPDATE_ARTICLES_FAIL;

  constructor(public payload: string) {}
}

/**
 * Delete article
 */
export class DeleteArticle implements Action {
  readonly type = DELETE_ARTICLE;

  constructor(public payload: string) {}
}

export class DeleteArticleSuccess implements Action {
  readonly type = DELETE_ARTICLES_SUCCESS;

  constructor(public payload: object) {}
}

export class DeleteArticleFail implements Action {
  readonly type = DELETE_ARTICLES_FAIL;

  constructor(public payload: string) {}
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
