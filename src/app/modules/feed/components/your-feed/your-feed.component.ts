import { Component } from '@angular/core';

@Component({
  selector: 'app-your-feed',
  templateUrl: './your-feed.component.html',
  styleUrls: ['./your-feed.component.scss']
})
export class YourFeedComponent {

  public apiUrl: string = '/articles/feed';
  public popularTagsApiUrl: string = '/tags';

  constructor() { }

}
