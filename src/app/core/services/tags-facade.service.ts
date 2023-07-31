import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {AppStateInterface} from "../../shared/models/appState.interface";
import {Observable} from "rxjs";
import {TagsActions} from "../store/actions"
import {isLoadingSelector, tagsSelector} from "../store/selectors/tags.selectors";

@Injectable({
  providedIn: 'root'
})
export class TagsFacadeService {

  constructor(private store: Store<AppStateInterface>) { }

  public tags$: Observable<string[] | null> = this.store.select(tagsSelector);
  public tagsLoading$: Observable<boolean> = this.store.select(isLoadingSelector);

  public getTags(url: string): void {
    this.store.dispatch(TagsActions.GetTagsAction({url}));
  }
}
