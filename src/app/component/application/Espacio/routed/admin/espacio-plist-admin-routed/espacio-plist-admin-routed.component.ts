import { Component } from '@angular/core';
import { IEspacio } from 'src/app/model/espacio-interface';
import { IPage } from 'src/app/model/shared-interface';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { EspacioService } from 'src/app/service/espacio.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-espacio-plist-admin-routed',
  templateUrl: './espacio-plist-admin-routed.component.html',
  styleUrls: ['./espacio-plist-admin-routed.component.css']
})
export class EspacioPlistAdminRoutedComponent {

  responseFromServer: IPage<IEspacio>;

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
    private oEspacioService: EspacioService
  ) { }

  getPage() {
    this.oEspacioService.getUsuarioPlist(this.page, this.numberOfElements,
      this.strTermFilter,  this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<IEspacio>) => {
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
