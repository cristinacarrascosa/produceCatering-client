import { Component } from '@angular/core';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { LineaservicioService } from 'src/app/service/lineaservicio.service';
import { ILineaservicio } from '../../../../../../model/lineaservicio-interface';
import { IPage } from 'src/app/model/shared-interface';
import { HttpErrorResponse } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { MetadataService } from 'src/app/service/metadata.service';



@Component({
  selector: 'app-lineaservicio-plist-admin-routed',
  templateUrl: './lineaservicio-plist-admin-routed.component.html',
  styleUrls: ['./lineaservicio-plist-admin-routed.component.css']
})
export class LineaservicioPlistAdminRoutedComponent {

  responseFromServer: IPage<ILineaservicio>;

  strTermFilter: string = "";
  id_servicioFilter : number = 0;
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
    protected oLocation: Location,
    private oLineaservicioService: LineaservicioService,
    private oActivatedRoute: ActivatedRoute,
    private oRouter: Router,
    public oMetadataService: MetadataService
  ) {
    const id_servicio  =  this.oActivatedRoute.snapshot.params['id_servicio'];
    if(id_servicio == null){
      this.id_servicioFilter = 0;
  }else{
      this.id_servicioFilter = id_servicio;
  }
   }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oLineaservicioService.getLineaservicioPlist(this.page, this.numberOfElements,
      this.strTermFilter, this.id_servicioFilter  , this.id_escandallo,this.sortField, this.sortDirection)
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
    this.id_servicioFilter   = id;
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
