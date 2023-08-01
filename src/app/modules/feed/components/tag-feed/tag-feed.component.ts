import { Component } from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";

@Component({
  selector: 'app-tag-feed',
  templateUrl: './tag-feed.component.html',
  styleUrls: ['./tag-feed.component.scss']
})
export class TagFeedComponent {

  public apiUrl: string;
  public popularTagsApiUrl: string = '/tags';
  public tagName: string | null;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {


    this.route.params.subscribe((params: Params) => {
      this.tagName = params['slug'];
      this.apiUrl = `/articles?tag=${this.tagName}`;
    })
  }
}
