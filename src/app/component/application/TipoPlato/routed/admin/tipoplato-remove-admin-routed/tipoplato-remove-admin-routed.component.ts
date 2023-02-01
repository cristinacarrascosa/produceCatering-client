import { Component, OnInit } from '@angular/core';
import { ITipoplato } from 'src/app/model/tipoplato-interface';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { TipoplatoService } from 'src/app/service/tipoplato.service';


declare let bootstrap: any;

@Component({
  selector: 'app-tipoplato-remove-admin-routed',
  templateUrl: './tipoplato-remove-admin-routed.component.html',
  styleUrls: ['./tipoplato-remove-admin-routed.component.css']
})
export class TipoplatoRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  msg: string = "";
  oTipoplato!: ITipoplato;

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oTipoplatoService: TipoplatoService
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
        console.log(data);
      }
    })
  }

  removeOne() {
    this.oTipoplatoService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Tipo de plato " + this.id + " borrado";
        //open bootstrap modal here
        alert(this.msg);
        this.oLocation.back();
      }
    })
  }


}

