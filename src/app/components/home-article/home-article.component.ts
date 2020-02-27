import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IArticle } from 'src/app/schemas/article.interface';


@Component({
  selector: 'app-home-article',
  templateUrl: './home-article.component.html',
  styleUrls: ['./home-article.component.scss']
})
export class HomeArticleComponent implements OnChanges {

  @Input() article: IArticle;


  constructor() { }


  ngOnChanges(changes: SimpleChanges) {
    // console.log(changes);
  }


}
