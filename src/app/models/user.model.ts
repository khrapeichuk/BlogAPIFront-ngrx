export class User {
  _id: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  token: string;
  created_at: string;
  updated_at: string;
  is_subscribed: boolean;
  rights: any;

  constructor(_id: string,
              firstname: string,
              lastname: string,
              email: string,
              password: string,
              token: string,
              created_at: string,
              updated_at: string,
              is_subscribed: boolean,
              rights: any) {
    this._id = _id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.token = token;
    this.created_at = created_at;
    this.updated_at = updated_at;
    this.is_subscribed = is_subscribed;
    this.rights = rights;
  }
}
