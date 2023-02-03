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
  login: FormControl<string>;
  password: FormControl<string>;
}

export interface IPage<T> {
  content: T[];
  pageable: Pageable;
  last: boolean;
  totalPages: number;
  totalElements: number;
  numberOfElements: number;
  first: boolean;
  size: number;
  number: number;
  sort: Sort;
  empty: boolean;
}

