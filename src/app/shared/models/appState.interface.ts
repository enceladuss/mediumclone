import {AuthStateInterface} from "../../modules/auth/models/authState.interface";
import {FeedStateInterface} from "../../core/models/feedState.interface";

export interface AppStateInterface {
  auth: AuthStateInterface;
  feed: FeedStateInterface;
}
