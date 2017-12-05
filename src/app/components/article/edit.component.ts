import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ArticleService } from '../../services/article.service';
import { Article } from '../../models/article.model';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit.component.html',
  styleUrls: ['../../app.component.css']
})

export class EditArticleComponent implements OnInit {
  article: Article;
  data: Object;
  error: null;
  editArticleForm: FormGroup;

  /**
   * EditArticleComponent constructor
   *
   * @param {FormBuilder} formBuilder
   * @param {ArticleService} articleService
   * @param {ActivatedRoute} activatedRoute
   * @param {Router} router
   */
  constructor(
    formBuilder: FormBuilder,
    private articleService: ArticleService,
    private  activatedRoute: ActivatedRoute,
    private router: Router)
  {
    this.editArticleForm = formBuilder.group({
      'title' : [null, Validators.required]
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params
      .subscribe((params: Params) => {
        this.getArticleData(params['id']);
      });
  }

  /**
   * @param id
   */
  getArticleData(id) {
    this.articleService.getArticleById(id)
      .subscribe((responseBody: object) => {
        this.data = responseBody;
    });
  }

  /**
   * @param articleId
   * @param {HTMLInputElement} title
   * @param {HTMLInputElement} body
   * @param {HTMLInputElement} category
   * @param {HTMLInputElement} image
   */
  editArticle(articleId, title: HTMLInputElement, body: HTMLInputElement, category: HTMLInputElement, image: HTMLInputElement) {
    this.article = new Article(
      articleId,
      title.value,
      [],
      '',
      image.value,
      body.value,
      [],
      '',
      '',
      []
    );

    this.error = null;
    this.articleService.editArticle(this.article)
      .subscribe((responseBody: object) => {
          this.data = responseBody;

          this.router.navigate(['/articles']);
        },
        (error) => this.error = error.json().error
      );
  }
}
