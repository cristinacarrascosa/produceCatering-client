import { Component } from '@angular/core';
import { IPage } from 'src/app/model/shared-interface';
import { ITipoplato } from '../../../../../../model/tipoplato-interface';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { TipoplatoService } from 'src/app/service/tipoplato.service';
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-tipoplato-plist-admin-routed',
  templateUrl: './tipoplato-plist-admin-routed.component.html',
  styleUrls: ['./tipoplato-plist-admin-routed.component.css']
})
export class TipoplatoPlistAdminRoutedComponent {

  responseFromServer: IPage<ITipoplato>;
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
    private oTipoplatoService: TipoplatoService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oTipoplatoService.getTipoplatoPlist(this.page, this.numberOfElements,
      this.strTermFilter, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<ITipoplato>) => {
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
