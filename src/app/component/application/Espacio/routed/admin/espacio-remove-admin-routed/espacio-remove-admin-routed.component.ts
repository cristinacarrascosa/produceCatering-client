import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IEspacio } from 'src/app/model/espacio-interface';
import { EspacioService } from 'src/app/service/espacio.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-espacio-remove-admin-routed',
  templateUrl: './espacio-remove-admin-routed.component.html',
  styleUrls: ['./espacio-remove-admin-routed.component.css']
})
export class EspacioRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  msg: string = "";
  oEspacio!: IEspacio;

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oEspacioService: EspacioService
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }


    ngOnInit(): void {
      this.getOne();
    }

  getOne() {
    this.oEspacioService.getOne(this.id).subscribe({
      next: (data: IEspacio) => {
        this.oEspacio = data;
        console.log(data);
      }
    })
  }

  removeOne() {
    this.oEspacioService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Espacio " + this.id + " borrado";
        //open bootstrap modal here
        alert(this.msg);
        this.oLocation.back();
      }
    })
  }

}


