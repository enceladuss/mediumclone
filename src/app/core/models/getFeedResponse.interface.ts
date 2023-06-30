import {ArticleInterface} from "../../shared/models/article.interface";

export interface GetFeedResponseInterface {
  articles: ArticleInterface[];
  articlesCount: number;
}
