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
        .map(article => new ArticleActions.GetArticleSuccess(article))
        .catch(error => of(new ArticleActions.GetArticleFail(error)))
    );
}
