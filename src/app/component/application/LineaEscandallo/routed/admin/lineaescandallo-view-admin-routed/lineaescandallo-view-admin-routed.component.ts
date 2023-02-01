import { Component, OnInit } from '@angular/core';
import { ILineaescandallo } from '../../../../../../model/lineaescandallo';
import { Location } from '@angular/common';
import { LineaescandalloService } from 'src/app/service/lineaescandallo.service';
import { ActivatedRoute } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';




@Component({
  selector: 'app-lineaescandallo-view-admin-routed',
  templateUrl: './lineaescandallo-view-admin-routed.component.html',
  styleUrls: ['./lineaescandallo-view-admin-routed.component.css']
})
export class LineaescandalloViewAdminRoutedComponent implements OnInit {

  id: number = 0;
  oLineaescandallo!: ILineaescandallo;

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    public oMetadataService: MetadataService,
    private oLineaescandalloService: LineaescandalloService
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
   }

   ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oLineaescandalloService.getOne(this.id).subscribe({
      next: (data: ILineaescandallo) => {
        this.oLineaescandallo = data;
        console.log(data);
        //this.oLocation.back();
      }
    })
  }

}

