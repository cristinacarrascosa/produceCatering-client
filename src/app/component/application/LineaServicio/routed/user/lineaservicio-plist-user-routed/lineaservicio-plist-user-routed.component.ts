import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ILineaservicio } from 'src/app/model/lineaservicio-interface';
import { IPage } from 'src/app/model/shared-interface';
import { LineaservicioService } from 'src/app/service/lineaservicio.service';

@Component({
  selector: 'app-lineaservicio-plist-user-routed',
  templateUrl: './lineaservicio-plist-user-routed.component.html',
  styleUrls: ['./lineaservicio-plist-user-routed.component.css']
})
export class LineaservicioPlistUserRoutedComponent {

  responseFromServer: IPage<ILineaservicio>;

  strTermFilter: string = "";
  id_servicio: number = 0;
  id_escandallo: number = 0;
  id_salon: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor(
    private oLineaservicioService: LineaservicioService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oLineaservicioService.getLineaservicioPlist(this.page, this.numberOfElements,
      this.strTermFilter, this.id_servicio, this.id_escandallo,this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<ILineaservicio>) => {
          this.responseFromServer = resp;
          if (this.page > resp.totalPages - 1) {
            this.page = resp.totalPages - 1;
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
  }




  setPage(e: number) {
    this.page = e - 1;
    this.getPage();
  }



  setRpp(rpp: number) {
    this.numberOfElements = rpp;

    this.getPage();
  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }

  setFilterByEscandallo(id: number): void {
    this.id_escandallo = id;
    this.getPage();
  }

  setFilterByServicio(id: number): void {
    this.id_servicio = id;
    this.getPage();
  }

  setFilterBySalon(id: number): void {
    this.id_salon = id;
    this.getPage();
  }

  setOrder(order: string): void {
    this.sortField = order;
    if (this.sortDirection == "asc") {
      this.sortDirection = "desc";
    } else {
      this.sortDirection = "asc";
    }
    this.getPage();
  }



}
