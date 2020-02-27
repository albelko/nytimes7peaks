export interface IArticleResponse {
  status: string;
  copyright: string;
  response: {
    docs: IArticle[],
    meta: {
      hits: number,
      offset: number,
      time: number
    }
  };
}

export interface IArticle {
  _id: string;
  byline: IByline;
  document_type: string;
  abstract: string;
  headline: IHeadline;
  keywords: IKeyword;
  multimedia: Array<IMultimedia>;
  news_desk: string;
  print_page: number;
  pub_date: string;
  score: number;
  snippet: string;
  source: string;
  type_of_material: string;
  uri: string;
  web_url: string;
  word_count: number;
}

export interface IPerson {
  firstname: string;
  lastname: string;
  middlename: string;
  organization: string;
  qualifier: string;
  rank: number;
  role: string;
  title: string;
}

export interface IByline {
  organization: string;
  original: string;
  person: Array<IPerson>;
}

export interface IHeadline {
  content_kicker: string;
  kicker: string;
  main: string;
  name: string;
  print_headline: string;
  seo: string;
  sub: string;
}

export interface IKeyword {
  major: string;
  name: string;
  rank: number;
  value: string;
}

export interface IMultimedia {
  caption: string;
  credit: string;
  crop_name: string;
  height: number;
  legacy: {
    xlarge: string;
    xlargeheight: number;
    xlargewidth: number;
  };
  rank: number;
  subtype: string;
  type: string;
  url: string;
  width: number;
}
