import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {GetArticleResponseInterface} from "../models/getArticleResponse.interface";
import {environment} from "../../../environments/environment";
import {ArticleInterface} from "../models/article.interface";
import {ManageArticleInterface} from "../models/manage-article.interface";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private http: HttpClient) { }

  getArticle(slug: string): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;

    return this.http.get<GetArticleResponseInterface>(fullUrl).pipe(
      map((response: GetArticleResponseInterface) => response.article)
    );
  }

  createArticle(article: ManageArticleInterface): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/`;

    return this.http.post<ArticleInterface>(fullUrl, {article: article});
  }

  editArticle(id: string, article: ManageArticleInterface): Observable<ArticleInterface> {
    const fullUrl = `${environment.apiUrl}/articles/${id}`;

    return this.http.put<ArticleInterface>(fullUrl, {article: article});
  }

  deleteArticle(slug: string): Observable<void> {
    const fullUrl = `${environment.apiUrl}/articles/${slug}`;

    return this.http.delete<void>(fullUrl);
  }
}
