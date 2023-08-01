import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-feed-toggler',
  templateUrl: './feed-toggler.component.html',
  styleUrls: ['./feed-toggler.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class FeedTogglerComponent {

  @Input('tagName') tagName: string | null;

  constructor() { }

}
