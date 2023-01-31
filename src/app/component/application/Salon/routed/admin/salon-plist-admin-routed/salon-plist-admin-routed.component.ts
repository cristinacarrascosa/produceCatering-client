import { Component } from '@angular/core';
import { ISalon } from 'src/app/model/salon-interface';
import { IPage } from 'src/app/model/shared-interface';
import {
  faEye,
  faUserPen,
  faTrash,
  faArrowUp,
  faArrowDown,
} from '@fortawesome/free-solid-svg-icons';
import { SalonService } from 'src/app/service/salon.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-salon-plist-admin-routed',
  templateUrl: './salon-plist-admin-routed.component.html',
  styleUrls: ['./salon-plist-admin-routed.component.css'],
})
export class SalonPlistAdminRoutedComponent {
  responseFromServer: IPage<ISalon>;
  //
  strTermFilter: string = '';
  id_espacio: number = 0;
  numberOfElements: number = 5;
  page: number = 0;
  sortField: string = '';
  sortDirection: string = '';

  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor(private oSalonService: SalonService) {}

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oSalonService
      .getSalonPlist(
        this.page,
        this.numberOfElements,
        this.strTermFilter,
        this.id_espacio,
        this.sortField,
        this.sortDirection
      )
      .subscribe({
        next: (resp: IPage<ISalon>) => {
          this.responseFromServer = resp;
          if (this.page > resp.totalPages - 1) {
            this.page = resp.totalPages - 1;
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        },
      });
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
    this.id_espacio = id;
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
