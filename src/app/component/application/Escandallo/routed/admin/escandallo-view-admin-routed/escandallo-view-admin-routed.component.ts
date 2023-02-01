import { Component, OnInit } from '@angular/core';
import { IEscandallo } from '../../../../../../model/escandallo-interface';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { EscandalloService } from 'src/app/service/escandallo.service';
import { MetadataService } from 'src/app/service/metadata.service';


@Component({
  selector: 'app-escandallo-view-admin-routed',
  templateUrl: './escandallo-view-admin-routed.component.html',
  styleUrls: ['./escandallo-view-admin-routed.component.css']
})
export class EscandalloViewAdminRoutedComponent implements OnInit {

  id: number = 0;
  oEscandallo!: IEscandallo;

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oEscandalloService: EscandalloService,
    public oMetadataService: MetadataService
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
        //console.log(data);
        //this.oLocation.back();
      }
    })
  }




}

