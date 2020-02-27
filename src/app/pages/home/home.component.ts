import { Component, OnInit } from '@angular/core';
import { IArticle } from 'src/app/schemas/article.interface';
import { ArticleService } from 'src/app/services/article.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public isLoading = false;
  public articles = new Array<IArticle>();
  public queryParams = {
    q: '',
    sort: 'relevance',
    page: 0
  };
  public sortValues = [ 'relevance', 'newest', 'oldest' ];


  constructor(private articleService: ArticleService,
              private router: Router,
              private route: ActivatedRoute) { }


  public ngOnInit() {
    this.route.queryParams
      .subscribe(params => {
        Object.assign(this.queryParams, params);
        this.queryParams.page = Number(this.queryParams.page) || 0;

        if (!this.sortValues.includes(this.queryParams.sort)) {
          this.queryParams.sort = 'relevance';
        }

        this.fetchArticles(this.queryParams);
      });
  }


  public fetchArticles(queryParams) {
    this.isLoading = true;

    this.router.navigate(['/articles'], { queryParams: this.queryParams })
      .then(value => {
        console.log(value);
      });

    this.articleService.getArticles(queryParams).subscribe(
      (response) => {
        console.log('Articles collection', response);

        if (this.queryParams.page > 0) {
          response.map(item => this.articles.push(item));
        } else {
          this.articles = response;
        }
      },
      (error) => {
        console.error(error);
      },
      () => {
        this.isLoading = false;
      }
    );
  }


  public onSearchValueUpdated(value: string) {
    console.log('Search value:', value);

    this.queryParams.q = value;
    this.queryParams.page = 0;
    this.fetchArticles(this.queryParams);
  }


  public onSortValueUpdated(value: string) {
    console.log('Sort value:', value);

    this.queryParams.sort = value;
    this.queryParams.page = 0;
    this.fetchArticles(this.queryParams);
  }


  public loadMoreArticles() {
    console.log('Load more click');

    this.queryParams.page++;
    this.fetchArticles(this.queryParams);
  }

}
