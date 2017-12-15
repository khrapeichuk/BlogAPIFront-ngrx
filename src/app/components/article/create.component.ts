import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';

import { ArticleService } from '../../services/article.service';
import * as articleActions from '../../actions/article.actions';

@Component({
  selector: 'app-create-article',
  templateUrl: './create.component.html',
  styleUrls: ['../../app.component.css']
})

export class CreateArticleComponent {
  data: Object;
  error: null;

  /**
   * CreateArticleComponent constructor
   *
   * @param {ArticleService} articleService
   * @param {Router} router
   * @param {Store<any>} store
   */
  constructor(
    private articleService: ArticleService,
    private router: Router,
    private store: Store<any>
  ) {}

  /**
   * @param article
   */
  createArticle(article) {
    this.store.dispatch(new articleActions.CreateArticle(article));
    this.router.navigate(['/articles']);
  }
}
