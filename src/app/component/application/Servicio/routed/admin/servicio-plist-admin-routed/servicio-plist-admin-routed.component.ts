import { Component } from '@angular/core';
import { IServicio } from 'src/app/model/servicio-interface';
import { IPage } from 'src/app/model/shared-interface';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ServicioService } from 'src/app/service/servicio.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-servicio-plist-admin-routed',
  templateUrl: './servicio-plist-admin-routed.component.html',
  styleUrls: ['./servicio-plist-admin-routed.component.css']
})
export class ServicioPlistAdminRoutedComponent {

  responseFromServer: IPage<IServicio>;

  strTermFilter: string = "";
  id_salon: number = 0;
  id_usuario: number = 0;
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
    private oServicioService: ServicioService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oServicioService.getServicioPlist(this.page, this.numberOfElements,
      this.strTermFilter, this.id_salon, this.id_usuario,this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<IServicio>) => {
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

  setFilterByUsuario(id: number): void {
    this.id_usuario = id;
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
