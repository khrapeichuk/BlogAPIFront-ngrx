export class Article {
  _id: string;
  title: string;
  category: Category[];
  slug: string;
  image: string;
  body: string;
  author: Author[];
  created_at: string;
  updated_at: string;
  comments: Comment[];


  constructor(_id: string,
              title: string,
              category: Category[],
              slug: string,
              image: string,
              body: string,
              author: Author[],
              created_at: string,
              updated_at: string,
              comments: Comment[]) {
    this._id = _id;
    this.title = title;
    this.category = category;
    this.slug = slug;
    this.image = image;
    this.body = body;
    this.author = author;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.comments = comments;
  }
}


export interface Category {
  key: number;
  value: string;
}

export interface Author {
  _id: string;
  firstname: string;
  lastname: string;
}

export interface Comment {
  key: number;
  value: Data[];
}

export interface Data {
  author: Author[];
  message: string;
  _id: string;
  created_at: string;
  updated_at: string;
}
