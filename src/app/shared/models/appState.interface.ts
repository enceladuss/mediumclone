import {AuthStateInterface} from "../../modules/auth/models/authState.interface";
import {FeedStateInterface} from "../../core/models/feedState.interface";
import {TagsStateInterface} from "../../core/models/tagsState.interface";
import {ArticleStateInterface} from "../../modules/article/models/articleState.interface";

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
  tags: TagsStateInterface;
  article: ArticleStateInterface;
}
