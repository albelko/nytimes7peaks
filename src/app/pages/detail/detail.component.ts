import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ArticleService } from '@services/article.service';
import { IArticle } from '@schemas/article.interface';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  public theHtmlString: any;
  public article: IArticle;
  public isLoading = false;


  constructor(private activatedRoute: ActivatedRoute,
              private http: HttpClient,
              private articleService: ArticleService) {}


  public ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      this.isLoading = true;

      this.articleService.getSpecificArticle(params.id).subscribe(
        (response) => {
          console.log('Article detail', response);

          this.article = response;
          this.parseArticle(this.article.web_url);
        },
        (error) => {
          console.error(error);
        },
        () => {
          this.isLoading = false;
        }
      );
    });
  }


  public parseArticle(url: string) {
    this.http.get(`http://localhost:4200/parse?url=${ url }`)
      .subscribe((response) => {
        this.theHtmlString = response;
      });
  }

}
