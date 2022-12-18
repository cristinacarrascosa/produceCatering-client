import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../../../../../../../service/usuario.service';
import { Location } from '@angular/common';
import { IUsuario } from '../../../../../../../model/usuario-interface';



declare let bootstrap: any;

@Component({
  selector: 'app-usuario-remove-admin-routed',
  templateUrl: './usuario-remove-admin-routed.component.html',
  styleUrls: ['./usuario-remove-admin-routed.component.css']
})
export class UsuarioRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  msg: string = "";
  oUsuario!: IUsuario;

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oUsuarioService: UsuarioService
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oUsuarioService.getOne(this.id).subscribe({
      next: (data: IUsuario) => {
        this.oUsuario = data;
        console.log(data);
      }
    })
  }

  removeOne() {
    this.oUsuarioService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Task " + this.id + " removed";
        //open bootstrap modal here
        alert(this.msg);
        this.oLocation.back();
      }
    })
  }

}
