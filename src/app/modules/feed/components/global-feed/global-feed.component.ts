import { Component } from '@angular/core';

@Component({
  selector: 'app-global-feed',
  templateUrl: './global-feed.component.html',
  styleUrls: ['./global-feed.component.scss']
})
export class GlobalFeedComponent  {

  public apiUrl: string = '/articles';
  public pageUrl: string = '/home';
  public popularTagsApiUrl: string = '/tags';

  constructor() { }

}
