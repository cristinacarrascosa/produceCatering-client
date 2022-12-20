import { HttpErrorResponse } from "@angular/common/http";
import { FormControl } from "@angular/forms";

export interface Pageable {
  sort: Sort;
  offset: number;
  pageNumber: number;
  pageSize: number;
  paged: boolean;
  unpaged: boolean;
}

export interface Sort {
  empty: boolean;
  sorted: boolean;
  unsorted: boolean;
}

export interface IResult {
  id: number;
  strOperation: string;
  strEntity: string;
  error: HttpErrorResponse;
}

export interface IEntity {
  id: number;
}

export interface IUser {
  email: FormControl<string>;
  password: FormControl<string>;
}
