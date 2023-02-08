import { Component } from '@angular/core';
import { IEscandallo } from 'src/app/model/escandallo-interface';
import { IPage } from 'src/app/model/shared-interface';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { EscandalloService } from 'src/app/service/escandallo.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-escandallo-plist-admin-routed',
  templateUrl: './escandallo-plist-admin-routed.component.html',
  styleUrls: ['./escandallo-plist-admin-routed.component.css']
})
export class EscandalloPlistAdminRoutedComponent {

  responseFromServer: IPage<IEscandallo>;
  //
  strTermFilter: string = "";
  id_tipoplato: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";
  id_escandallo: number = 0;

  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor(
    private oEscandalloService: EscandalloService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oEscandalloService.getEscandalloPlist(this.page, this.numberOfElements,
      this.strTermFilter, this.id_tipoplato, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<IEscandallo>) => {
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

  setFilterByTipoplato(id: number): void {
    this.id_tipoplato = id;
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
