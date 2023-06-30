import {Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {GetFeedResponseInterface} from "../models/getFeedResponse.interface";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private httpClient: HttpClient) {
  }

  public getFeed(url: string): Observable<GetFeedResponseInterface> {
    const fullUrl = environment.apiUrl + url;

    return this.httpClient.get<GetFeedResponseInterface>(fullUrl);
  }
}
