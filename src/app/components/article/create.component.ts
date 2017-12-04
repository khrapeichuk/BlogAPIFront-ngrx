import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ArticleService } from '../../services/article.service';

@Component({
  selector: 'app-create-article',
  templateUrl: './create.component.html',
  styleUrls: ['../../app.component.css']
})

export class CreateArticleComponent {
  data: Object;
  error: null;
  createArticleForm: FormGroup;

  /**
   * CreateArticleComponent constructor
   *
   * @param {FormBuilder} formBuilder
   * @param {ArticleService} articleService
   * @param {Router} router
   */
  constructor(formBuilder: FormBuilder, private articleService: ArticleService, private router: Router) {
    this.createArticleForm = formBuilder.group({
      'title' : [null, Validators.required]
    });
  }

  /**
   * @param article
   */
  createArticle(article) {
    this.articleService.createArticle(article)
      .subscribe((responseBody: object) => {
          this.data = responseBody;

          this.router.navigate(['/articles']);
        },
        (error) => this.error = error.json().error
      );
  }
}
