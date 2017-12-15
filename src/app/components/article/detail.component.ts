import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import { ArticleService } from '../../services/article.service';
import { UserService } from '../../services/user.service';
import { Article } from '../../models/article.model';

import * as articleActions from '../../actions/article.actions';
import * as articleReducer from '../../app.reducers';

@Component({
  selector: 'app-article-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['../../app.component.css']
})

export class ArticleDetailComponent implements OnInit {
  data: Article;
  article$: Store<Article>;

  /**
   * ArticleDetailComponent constructor
   *
   * @param {ArticleService} articleService
   * @param {ActivatedRoute} activatedRoute
   * @param {UserService} userService
   * @param {Store<Article>} store
   */
  constructor (
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private userService: UserService,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params: Params) => {
        this.getArticleDetail(params['id']);
      });
  }

  /**
   * @param id
   */
  getArticleDetail(id) {
    this.store.dispatch(new articleActions.GetArticle(id));
    this.article$ = this.store.select(articleReducer.getSelectedArticle);
  }

  /**
   * @param id
   * @returns {boolean}
   */
  isCommentAuthor(id) {
    return this.userService.isArticleOrCommentAuthor(id);
  }
}
