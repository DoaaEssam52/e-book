import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './modules/shared/shared.module';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { CategoriesReducer } from './store/reducers/categories-reducer';
import { AuthReducer } from './store/reducers/auth-reducer';
import { BasketReducer } from './store/reducers/basket-reducer';
import { BooksReducer } from './store/reducers/books-reducer';

import { CategoriesEffects } from './store/effects/categories-effects';
import { AuthEffects } from './store/effects/auth-effects';
import { BasketEffects } from './store/effects/basket-effects';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpInterceptor } from './interceptors/http.interceptor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot(
      {
        categoriesData: CategoriesReducer,
        authData: AuthReducer,
        basketData: BasketReducer,
        booksData: BooksReducer
      },
      {}
    ),
    EffectsModule.forRoot([
      CategoriesEffects,
      AuthEffects,
      BasketEffects,
    ]),
    SharedModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
