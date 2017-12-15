import { Article } from './article.model';

export class CreatedArticle implements Article{
  _id: string;
  title: string;
  image: string;
  body: string;

  constructor(_id: string,
              title: string,
              image: string,
              body: string
  ) {
    this._id = _id;
    this.title = title;
    this.image = image;
    this.body = body;
  }
}
