import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";
import {GetTagsResponseInterface} from "../models/getTagsResponse.interface";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class TagsService {

  constructor(private http: HttpClient) {
  }

  public getTags(url: string): Observable<string[]> {
    const fullUrl = environment.apiUrl + url;

    return this.http.get<GetTagsResponseInterface>(fullUrl).pipe(map((response: GetTagsResponseInterface) => response.tags));
  }
}
