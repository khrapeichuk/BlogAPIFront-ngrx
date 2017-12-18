import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ArticleService } from '../../services/article.service';
import { UserService } from '../../services/user.service';

import { Article } from '../../models/article.model';

import * as articleReducer from '../../app.reducers';
import * as articleActions from '../../actions/article.actions';

@Component({
  selector: 'app-articles',
  templateUrl: './index.component.html',
  styleUrls: ['../../app.component.css']
})

export class ArticlesComponent implements OnInit {
  data: Object;
  articles$: Store<Article[]>;

  /**
   * ArticlesComponent constructor
   *
   * @param {ArticleService} articleService
   * @param {UserService} userService
   * @param {Store<any>} store
   */
  constructor(
    private articleService: ArticleService,
    private userService: UserService,
    private store: Store<any>
  ) {
  }

  ngOnInit(): void {
    this.store.dispatch(new articleActions.GetArticles());
    this.articles$ = this.store.select(articleReducer.getArticles);
  }

  /**
   * @param id
   */
  deleteArticle(id) {
    this.store.dispatch(new articleActions.DeleteArticle(id));

    location.reload();
  }

  isAuthorized() {
    return this.userService.isAuthorized();
  }

  /**
   * @param id
   *
   * @returns {boolean}
   */
  isArticleAuthor(id) {
    return this.userService.isArticleOrCommentAuthor(id);
  }
}
