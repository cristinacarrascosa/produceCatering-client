import { Component, OnInit } from '@angular/core';
import { ITipoplato } from 'src/app/model/tipoplato-interface';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { TipoplatoService } from 'src/app/service/tipoplato.service';


@Component({
  selector: 'app-tipoplato-view-admin-routed',
  templateUrl: './tipoplato-view-admin-routed.component.html',
  styleUrls: ['./tipoplato-view-admin-routed.component.css']
})
export class TipoplatoViewAdminRoutedComponent implements OnInit {

  id: number = 0;
  oTipoplato!: ITipoplato;

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oTipoplatoService: TipoplatoService,
    public oMetadataService: MetadataService
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
   }

   ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oTipoplatoService.getOne(this.id).subscribe({
      next: (data: ITipoplato) => {
        this.oTipoplato = data;
        //console.log(data);
        //this.oLocation.back();
      }
    })
  }

}

