import {Component, Input, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule} from "@angular/router";
import {TagsFacadeService} from "../../../core/services/tags-facade.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss'],
  standalone: true,
  imports: [CommonModule, RouterModule]
})
export class PopularTagsComponent implements OnInit {

  @Input('apiUrl') apiUrl: string;

  public tags$: Observable<string[] | null> = this.tagsFacadeService.tags$;
  public tagsLoading$: Observable<boolean> = this.tagsFacadeService.tagsLoading$;

  constructor(private tagsFacadeService: TagsFacadeService) { }

  ngOnInit(): void {
    this.tagsFacadeService.getTags(this.apiUrl);
  }

}
