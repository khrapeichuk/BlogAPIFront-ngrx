export interface Article {
  _id?: string;
  title?: string;
  category?: Category[];
  slug?: string;
  image?: string;
  body?: string;
  author?: Author[];
  created_at?: string;
  updated_at?: string;
  comments?: Comment[];
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
  key?: number;
  value?: Data[];
}

export interface Data {
  author: Author[];
  message: string;
  _id: string;
  created_at: string;
  updated_at: string;
}
