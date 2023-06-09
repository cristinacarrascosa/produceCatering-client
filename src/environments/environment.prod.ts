import { HttpHeaders } from "@angular/common/http";


export const environment = {
  production: true,
};

export const HTTP_OPTIONS = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json; charset=UTF-8',
  }),
  withCredentials: true
};

export const baseURL="producecatering-db-production.up.railway.app"
