import {Component, Input} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";

@Component({
  selector: 'app-tag-list',
  templateUrl: './tag-list.component.html',
  styleUrls: ['./tag-list.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class TagListComponent {

  @Input('tagList') public tagList: string[];

  constructor() { }

}
