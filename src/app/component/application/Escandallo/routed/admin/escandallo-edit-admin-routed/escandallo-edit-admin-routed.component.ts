import { Component, OnInit } from '@angular/core';
import { IEscandallo, IEscandallo2Form, IEscandallo2Send } from '../../../../../../model/escandallo-interface';
import { ITipoplato } from '../../../../../../model/tipoplato-interface';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { EscandalloService } from 'src/app/service/escandallo.service';
import { MetadataService } from 'src/app/service/metadata.service';
import { TipoplatoService } from 'src/app/service/tipoplato.service';
import { Location } from '@angular/common';


declare let bootstrap: any;


@Component({
  selector: 'app-escandallo-edit-admin-routed',
  templateUrl: './escandallo-edit-admin-routed.component.html',
  styleUrls: ['./escandallo-edit-admin-routed.component.css']
})
export class EscandalloEditAdminRoutedComponent implements OnInit {

  id: number = 0;
  oEscandallo: IEscandallo;


  oEscandallo2Form: IEscandallo2Form;
  oEscandallo2Send: IEscandallo2Send;
  oForm: FormGroup<IEscandallo2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  // foreign key
  tipoplatoDescription: string = "";

  constructor(
    public oMetadataService: MetadataService,
    protected oLocation: Location,
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oEscandalloService: EscandalloService,
    private oFormBuilder: FormBuilder,
    private oTipoplatoService: TipoplatoService
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
        console.log("datos: "+data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          nombre: [data.nombre, [Validators.required, Validators.minLength(5), Validators.maxLength(300)]],
          id_tipoplato: [data.tipoplato.id, [Validators.required, Validators.pattern(/^\d{1,6}$/)]]

        });
        this.updateTipoplatoDescription(this.oEscandallo.tipoplato.id);
      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oEscandallo2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      tipoplato: { id: this.oForm.value.id_tipoplato }

    }
    if (this.oForm.valid) {
      this.oEscandalloService.updateOne(this.oEscandallo2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "Produce Catering";
          this.modalContent = "Escandallo " + this.id + " actualizado";
          this.showModal();
        }
      })
    }
  }

  showModal = () => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/escandallo/view', this.id])
    })
    this.myModal.show()
  }

  openModalFindTipoplato(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findtipoplato"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()


  }

  closeTipoplatoModal(id_tipoplato: number) {
    this.oForm.controls['id_tipoplato'].setValue(id_tipoplato);
    this.updateTipoplatoDescription(id_tipoplato);
    this.myModal.hide();
  }

  updateTipoplatoDescription(id_tipoplato: number) {
    this.oTipoplatoService.getOne(id_tipoplato).subscribe({
      next: (data: ITipoplato) => {
        this.tipoplatoDescription = data.nombre;
      },
      error: (error: any) => {
        this.tipoplatoDescription = "Tipo de plato no encontrado";
        this.oForm.controls['id_tipoplato'].setErrors({'incorrect': true});
      }
    })
  }



}

