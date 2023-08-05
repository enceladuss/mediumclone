import {BackendErrorsInterface} from "../../../shared/models/backendErrors.interface";
import {ArticleInterface} from "../../../shared/models/article.interface";

export interface ArticleStateInterface {
  isLoading: boolean;
  error: BackendErrorsInterface | null;
  data: ArticleInterface | null;
}
