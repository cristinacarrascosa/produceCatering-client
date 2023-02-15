import { Component } from '@angular/core';
import { IServicio } from 'src/app/model/servicio-interface';
import { IPage } from 'src/app/model/shared-interface';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ServicioService } from 'src/app/service/servicio.service';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-servicio-plist-admin-routed',
  templateUrl: './servicio-plist-admin-routed.component.html',
  styleUrls: ['./servicio-plist-admin-routed.component.css']
})
export class ServicioPlistAdminRoutedComponent {

  responseFromServer: IPage<IServicio>;

  strTermFilter: string = "";
  //Claves Ajenas
  id_SalonFilter: number = 0;
  id_UsuarioFilter: number = 0;
  //
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
    private oServicioService: ServicioService,
    private oActivatedRoute: ActivatedRoute,
    private oRouter: Router,

  ) {
    const id_salon =  this.oActivatedRoute.snapshot.params['id'];
    if(id_salon == null){
      this.id_SalonFilter = 0;
  }else{
      this.id_SalonFilter = id_salon;
  }
  }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oServicioService.getServicioPlist(this.page, this.numberOfElements, this.strTermFilter, this.id_UsuarioFilter, this.id_SalonFilter, this.sortField, this.sortDirection)
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

  setFilterByUsuario(id_UsuarioFilter: number): void {
    this.id_UsuarioFilter = id_UsuarioFilter;
    this.getPage();
  }

  setFilterBySalon(id_SalonFilter: number): void {
    this.id_SalonFilter = id_SalonFilter;
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
