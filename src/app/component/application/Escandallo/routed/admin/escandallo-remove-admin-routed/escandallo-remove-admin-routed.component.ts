import { Component, OnInit } from '@angular/core';
import { IEscandallo } from '../../../../../../model/escandallo-interface';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EscandalloService } from 'src/app/service/escandallo.service';

declare let bootstrap: any;


@Component({
  selector: 'app-escandallo-remove-admin-routed',
  templateUrl: './escandallo-remove-admin-routed.component.html',
  styleUrls: ['./escandallo-remove-admin-routed.component.css']
})
export class EscandalloRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  msg: string = "";
  oEscandallo!: IEscandallo;

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oEscandalloService: EscandalloService
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oEscandalloService.getOne(this.id).subscribe({
      next: (data: IEscandallo) => {
        this.oEscandallo = data;
        console.log(data);
      }
    })
  }

  removeOne() {
    this.oEscandalloService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Escandallo " + this.id + " borrado";
        //open bootstrap modal here
        alert(this.msg);
        this.oLocation.back();
      }
    })
  }
}

