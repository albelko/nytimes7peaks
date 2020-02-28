import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '@env';
import { IArticle, IArticleResponse } from '@schemas/article.interface';


@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  private resourceUrl = 'search/v2/articlesearch.json';
  private articleIdPrefix = 'nyt://article/';
  private queryParamsDefault = new HttpParams()
    .set('page', '0')
    .set('q', '')
    .set('sort', 'relevance')
    .set('fq', 'document_type:("article")')
    .set('api-key', environment.nytimesApiKey);


  constructor(private http: HttpClient) { }


  public getArticles(queryParams): Observable<IArticle[]> {
    const params = this.queryParamsDefault
      .set('sort', queryParams.sort)
      .set('page', queryParams.page)
      .set('q', queryParams.q);

    return this.http.get<IArticleResponse>(this.resourceUrl, { params })
      .pipe(map((value) => value.response.docs));
  }


  public getSpecificArticle(articleId: string): Observable<IArticle> {
    return this.http.get<IArticleResponse>(this.resourceUrl, { params: {
      fq: '_id:("' + this.articleIdPrefix + articleId + '")', 'api-key': environment.nytimesApiKey
    }})
      .pipe(map((value) => value.response.docs[0]));
  }

}
