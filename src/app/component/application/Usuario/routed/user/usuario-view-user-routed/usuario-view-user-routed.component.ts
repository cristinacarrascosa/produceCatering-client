import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interface';
import { MetadataService } from 'src/app/service/metadata.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { Location } from '@angular/common';
import { SessionService } from 'src/app/service/session.service';


@Component({
  selector: 'app-usuario-view-user-routed',
  templateUrl: './usuario-view-user-routed.component.html',
  styleUrls: ['./usuario-view-user-routed.component.css']
})
export class UsuarioViewUserRoutedComponent implements OnInit {

  id: number = 0;
  oUsuario!: IUsuario;
  oSession: any;

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oUsuarioService: UsuarioService,
    public oMetadataService: MetadataService,
    public oSessionService: SessionService
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
        //console.log(data);
        //this.oLocation.back();
      }
    })
  }


}

