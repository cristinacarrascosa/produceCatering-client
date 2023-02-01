import { Component } from '@angular/core';
import { IReferencia } from '../../../../../../model/referencia-interface';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { ReferenciaService } from 'src/app/service/referencia.service';
import { IPage } from 'src/app/model/shared-interface';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-referencia-plist-admin-routed',
  templateUrl: './referencia-plist-admin-routed.component.html',
  styleUrls: ['./referencia-plist-admin-routed.component.css']
})
export class ReferenciaPlistAdminRoutedComponent {

  responseFromServer: IPage<IReferencia>;
  //
  strTermFilter: string = "";
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
    private oReferenciaService: ReferenciaService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oReferenciaService.getReferenciaPlist(this.page, this.numberOfElements,
      this.strTermFilter, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<IReferencia>) => {
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

  setFilterByTipousuario(id: number): void {

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
