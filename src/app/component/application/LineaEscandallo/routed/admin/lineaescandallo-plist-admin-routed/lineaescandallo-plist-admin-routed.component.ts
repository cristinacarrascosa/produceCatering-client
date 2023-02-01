import { Component } from '@angular/core';
import { ILineaescandallo } from '../../../../../../model/lineaescandallo';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IPage } from 'src/app/model/shared-interface';
import { LineaescandalloService } from 'src/app/service/lineaescandallo.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-lineaescandallo-plist-admin-routed',
  templateUrl: './lineaescandallo-plist-admin-routed.component.html',
  styleUrls: ['./lineaescandallo-plist-admin-routed.component.css']
})
export class LineaescandalloPlistAdminRoutedComponent {

  responseFromServer: IPage<ILineaescandallo>;

  strTermFilter: string = "";
  id_escandallo: number = 0;
  id_referencia: number = 0;
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
    private oLineaescandalloService: LineaescandalloService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oLineaescandalloService.getLineaescandalloPlist(this.page, this.numberOfElements,
      this.strTermFilter, this.id_escandallo, this.id_referencia,this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<ILineaescandallo>) => {
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

  setFilterByReferencia(id: number): void {
    this.id_referencia = id;
    this.getPage();
  }

  setFilterByEscandallo(id: number): void {
    this.id_escandallo = id;
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
