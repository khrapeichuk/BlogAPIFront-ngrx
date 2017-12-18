import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { ArticleService } from '../services/article.service';
import * as ArticleActions from '../actions/article.actions';
import { Article } from '../models/article.model';

@Injectable()
export class ArticleEffects {
  constructor(
    private articleService: ArticleService,
    private actions$: Actions
  ) { }

  @Effect()
  getArticle$: Observable<Action> = this.actions$
    .ofType(ArticleActions.GET_ARTICLE)
    .map((action: ArticleActions.GetArticle) => action.payload)
    .switchMap(id => this.articleService.getArticleById(id)
      .map(articles => new ArticleActions.GetArticleSuccess(articles))
      .catch(error => of(new ArticleActions.GetArticleFail(error)))
    );

  @Effect()
  getArticles$: Observable<Action> = this.actions$
    .ofType(ArticleActions.GET_ARTICLES)
    .startWith(new ArticleActions.GetArticles())
    .switchMap(() => this.articleService.getArticles()
      .map((articles: Article[]) => new ArticleActions.GetArticlesSuccess(articles))
      .catch(error => of(new ArticleActions.GetArticlesFail(error)))
    );

  @Effect()
  createArticle$: Observable<Action> = this.actions$
    .ofType(ArticleActions.CREATE_ARTICLE)
    .map((action: ArticleActions.CreateArticle) => action.payload)
    .switchMap(article => this.articleService.createArticle(article)
      .map(articles => new ArticleActions.CreateArticleSuccess(articles))
      .catch(error => of(new ArticleActions.CreateArticleFail(error)))
    );

  @Effect()
  updateArticle$: Observable<Action> = this.actions$
    .ofType(ArticleActions.UPDATE_ARTICLE)
    .map((action: ArticleActions.UpdateArticle) => action.payload)
    .switchMap(article => this.articleService.editArticle(article)
      .map(articles => new ArticleActions.UpdateArticleSuccess(articles))
      .catch(error => of(new ArticleActions.UpdateArticleFail(error)))
    );

  @Effect()
  deleteArticle$: Observable<Action> = this.actions$
    .ofType(ArticleActions.DELETE_ARTICLE)
    .map((action: ArticleActions.DeleteArticle) => action.payload)
    .switchMap(id => this.articleService.deleteArticle(id)
    );
}
