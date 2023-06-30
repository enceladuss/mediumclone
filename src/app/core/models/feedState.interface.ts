import {GetFeedResponseInterface} from "./getFeedResponse.interface";
import {BackendErrorsInterface} from "../../shared/models/backendErrors.interface";

export interface FeedStateInterface {
  isLoading: boolean;
  error: BackendErrorsInterface | null;
  data: GetFeedResponseInterface | null;
}
