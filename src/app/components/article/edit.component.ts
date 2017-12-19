import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Store } from '@ngrx/store';

import { ArticleService } from '../../services/article.service';
import { CreatedArticle } from '../../models/created-article.model';

import * as articleActions from '../../actions/article.actions';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit.component.html',
  styleUrls: ['../../app.component.css']
})

export class EditArticleComponent implements OnInit {
  createdArticle: CreatedArticle;
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
   * @param {Store<any>} store
   */
  constructor(
    formBuilder: FormBuilder,
    private articleService: ArticleService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private store: Store<any>
  ) {
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
    this.createdArticle = new CreatedArticle(articleId, title.value, image.value, body.value);

    this.store.dispatch(new articleActions.UpdateArticle(this.createdArticle));
    this.router.navigate(['/articles']);
  }
}
