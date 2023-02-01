import { Component, OnInit } from '@angular/core';
import { IReferencia } from '../../../../../../model/referencia-interface';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { ReferenciaService } from 'src/app/service/referencia.service';


declare let bootstrap: any;


@Component({
  selector: 'app-referencia-remove-admin-routed',
  templateUrl: './referencia-remove-admin-routed.component.html',
  styleUrls: ['./referencia-remove-admin-routed.component.css']
})
export class ReferenciaRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  msg: string = "";
  oReferencia!: IReferencia;

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oReferenciaService: ReferenciaService
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oReferenciaService.getOne(this.id).subscribe({
      next: (data: IReferencia) => {
        this.oReferencia = data;
        console.log(data);
      }
    })
  }

  removeOne() {
    this.oReferenciaService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Referencia " + this.id + " borrado";
        //open bootstrap modal here
        alert(this.msg);
        this.oLocation.back();
      }
    })
  }
}
