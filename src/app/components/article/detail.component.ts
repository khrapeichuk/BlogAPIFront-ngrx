import { ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { ArticleService } from '../../services/article.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-article-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['../../app.component.css']
})

export class ArticleDetailComponent implements OnInit {
  data: Object;

  /**
   * ArticleDetailComponent constructor
   *
   * @param {ArticleService} articleService
   * @param {ActivatedRoute} activatedRoute
   * @param {UserService} userService
   */
  constructor (private articleService: ArticleService, private activatedRoute: ActivatedRoute, private userService: UserService) {}

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
    this.articleService.getArticleById(id)
      .subscribe((responseBody: object) => {
        this.data = responseBody;
    });
  }

  /**
   * @param id
   * @returns {boolean}
   */
  isCommentAuthor(id) {
    return this.userService.isArticleOrCommentAuthor(id);
  }
}
