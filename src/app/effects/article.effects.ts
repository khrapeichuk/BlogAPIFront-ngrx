import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';

import { ArticleService } from '../services/article.service';
import * as ArticleActions from '../actions/article.actions';

@Injectable()
export class ArticleEffects {
  constructor(
    private articleService: ArticleService,
    private actions$: Actions
  ) { }

  @Effect() getArticle$ = this.actions$
    .ofType(ArticleActions.GET_ARTICLE)
    .map((action: ArticleActions.GetArticle) => JSON.stringify(action.payload))
    .switchMap(id => this.articleService.getArticleById(id)
      .map(articles => new ArticleActions.GetArticleSuccess(articles))
      .catch(error => of(new ArticleActions.GetArticleFail(error)))
    );

  @Effect() createArticle$ = this.actions$
    .ofType(ArticleActions.CREATE_ARTICLE)
    .map((action: ArticleActions.CreateArticle) => JSON.stringify(action.payload))
    .switchMap(article => this.articleService.createArticle(article)
      .map(article => new ArticleActions.CreateArticleSuccess(article))
      .catch(error => of(new ArticleActions.CreateArticleFail(error)))
    );

  @Effect() updateArticle$ = this.actions$
    .ofType(ArticleActions.UPDATE_ARTICLE)
    .map((action: ArticleActions.UpdateArticle) => JSON.stringify(action.payload))
    .switchMap(article => this.articleService.editArticle(article)
      .map(article => new ArticleActions.UpdateArticleSuccess(article))
      .catch(error => of(new ArticleActions.UpdateArticleFail(error)))
    );
}
