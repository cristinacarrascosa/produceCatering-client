import { HttpHeaders } from "@angular/common/http";

export const production = false;
export const baseURL = "http://localhost:8083";
export const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8'
  }),
  withCredentials: true
}
