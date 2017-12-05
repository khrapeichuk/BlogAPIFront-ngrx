import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { LoginComponent } from './components/authentication/login.component';
import { LogoutComponent } from './components/authentication/logout.component';
import { RegistrationComponent } from './components/authentication/registration.component';
import { ProfileComponent } from './components/profile/index.component';
import { EditProfileComponent } from './components/profile/edit.component';

import { ArticlesComponent } from './components/article/index.component';
import { ArticleDetailComponent } from './components/article/detail.component';
import { CreateArticleComponent } from './components/article/create.component';
import { EditArticleComponent } from './components/article/edit.component';

import { APIService } from './services/api.service';
import { ArticleService } from './services/article.service';
import { LocalStorageService } from './services/local-storage.service';
import { UserService } from './services/user.service';
import { reducers } from './app.reducers';

import { ArticleEffects } from './effects/article.effects';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    RegistrationComponent,
    ProfileComponent,
    EditProfileComponent,

    ArticlesComponent,
    ArticleDetailComponent,
    CreateArticleComponent,
    EditArticleComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([ArticleEffects]),
  ],
  providers: [
    APIService,
    ArticleService,
    LocalStorageService,
    UserService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
