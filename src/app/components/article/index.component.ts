import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as articleActions from '../../actions/article.actions';

import { ArticleService } from '../../services/article.service';
import { UserService } from '../../services/user.service';
import { Article } from '../../models/article.model';
import * as articleReducer from '../../app.reducers';

@Component({
  selector: 'app-articles',
  templateUrl: './index.component.html',
  styleUrls: ['../../app.component.css']
})

export class ArticlesComponent implements OnInit {
  data: Object;
  articles$: Observable<Article[]>;

  /**
   * ArticlesComponent constructor
   *
   * @param {ArticleService} articleService
   * @param {UserService} userService
   */
  constructor(
    private articleService: ArticleService,
    private userService: UserService,
    private store: Store<Article>
  ) {
    this.store.dispatch(new articleActions.GetArticles());
  }

  ngOnInit(): void {
    this.articles$ = this.store.select(articleReducer.getArticles);
  }

  /**
   * @param id
   */
  deleteArticle(id) {
    this.articleService.deleteArticle(id);

    location.reload();
  }

  isAuthorized() {
    return this.userService.isAuthorized();
  }

  /**
   * @param id
   * @returns {boolean}
   */
  isArticleAuthor(id) {
    return this.userService.isArticleOrCommentAuthor(id);
  }
}
