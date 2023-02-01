import { Component, OnInit } from '@angular/core';
import { IReferencia } from '../../../../../../model/referencia-interface';
import { ActivatedRoute } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { ReferenciaService } from 'src/app/service/referencia.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-referencia-view-admin-routed',
  templateUrl: './referencia-view-admin-routed.component.html',
  styleUrls: ['./referencia-view-admin-routed.component.css']
})
export class ReferenciaViewAdminRoutedComponent implements OnInit {

  id: number = 0;
  oReferecia!: IReferencia;

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oReferenciaService: ReferenciaService,
    public oMetadataService: MetadataService
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
   }

   ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oReferenciaService.getOne(this.id).subscribe({
      next: (data: IReferencia) => {
        this.oReferecia = data;
        //console.log(data);
        //this.oLocation.back();
      }
    })
  }

}

