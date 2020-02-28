import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule, registerLocaleData } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';

import en from '@angular/common/locales/en';

import { httpInterceptorProviders } from 'src/app/interceptors';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from '@pages/detail/detail.component';
import { HomeComponent } from '@pages/home/home.component';
import { NotFoundComponent } from '@pages/not-found/not-found.component';
import { HomeArticleComponent } from '@components/home-article/home-article.component';
import { AboutComponent } from '@pages/about/about.component';
import { HomeSearchComponent } from '@components/home-search/home-search.component';
import { HomeSortComponent } from '@components/home-sort/home-sort.component';

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    HomeComponent,
    NotFoundComponent,
    HomeArticleComponent,
    AboutComponent,
    HomeSearchComponent,
    HomeSortComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule { }
