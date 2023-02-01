import { Component, OnInit } from '@angular/core';
import { ILineaescandallo } from '../../../../../../model/lineaescandallo';
import { Location } from '@angular/common';
import { LineaescandalloService } from 'src/app/service/lineaescandallo.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lineaescandallo-remove-admin-routed',
  templateUrl: './lineaescandallo-remove-admin-routed.component.html',
  styleUrls: ['./lineaescandallo-remove-admin-routed.component.css'],
})
export class LineaescandalloRemoveAdminRoutedComponent implements OnInit {
  id: number = 0;
  msg: string = '';
  oLineaescandallo!: ILineaescandallo;

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
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
      },
    });
  }

  removeOne() {
    this.oLineaescandalloService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = 'Línea de escandallo ' + this.id + ' borrada';
        //open bootstrap modal here
        alert(this.msg);
        this.oLocation.back();
      },
    });
  }
}
