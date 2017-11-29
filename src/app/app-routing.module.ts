import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './components/authentication/login.component';
import { LogoutComponent } from './components/authentication/logout.component';
import { RegistrationComponent } from './components/authentication/registration.component';
import { ProfileComponent } from './components/profile/index.component';
import { EditProfileComponent } from './components/profile/edit.component';

import { ArticleDetailComponent } from './components/article/detail.component';
import { ArticlesComponent } from './components/article/index.component';
import { CreateArticleComponent } from './components/article/create.component';
import { EditArticleComponent } from './components/article/edit.component';

const routes: Routes = [
  { path: 'login',  component: LoginComponent },
  { path: 'logout',  component: LogoutComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'profile',  component: ProfileComponent },
  { path: 'edit-profile',  component: EditProfileComponent },

  { path: 'articles', component: ArticlesComponent },
  { path: 'articles/:id', component: ArticleDetailComponent },
  { path: 'create-article', component: CreateArticleComponent },
  { path: 'edit-article/:id', component: EditArticleComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
