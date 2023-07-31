import {BackendErrorsInterface} from "../../shared/models/backendErrors.interface";

export interface TagsStateInterface {
  isLoading: boolean;
  errors: BackendErrorsInterface | null;
  tagsList: string[] | null;
}
