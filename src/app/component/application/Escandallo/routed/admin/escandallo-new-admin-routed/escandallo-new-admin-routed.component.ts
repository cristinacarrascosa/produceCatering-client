import { Component, OnInit } from '@angular/core';
import { IEscandallo, IEscandallo2Form, IEscandallo2Send } from '../../../../../../model/escandallo-interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { EscandalloService } from 'src/app/service/escandallo.service';
import { TipoplatoService } from 'src/app/service/tipoplato.service';
import { ITipoplato } from '../../../../../../model/tipoplato-interface';


declare let bootstrap: any;

@Component({
  selector: 'app-escandallo-new-admin-routed',
  templateUrl: './escandallo-new-admin-routed.component.html',
  styleUrls: ['./escandallo-new-admin-routed.component.css']
})
export class EscandalloNewAdminRoutedComponent implements OnInit {

  //id: number = 0;
  oEscandallo: IEscandallo = null;
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
    private oRouter: Router,
    protected oLocation: Location,
    public oMetadataService: MetadataService,
    private oActivatedRoute: ActivatedRoute,
    private oEscandalloService: EscandalloService,
    private oFormBuilder: FormBuilder,
    private oTipoplatoService: TipoplatoService
  ) { }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      nombre: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(50)]],
      id_tipoplato: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
    });
  }



  onSubmit() {
    console.log("onSubmit");
    this.oEscandallo2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      tipoplato: { id: this.oForm.value.id_tipoplato }

    }
    if (this.oForm.valid) {
      this.oEscandalloService.newOne(this.oEscandallo2Send).subscribe({
        next: (data: number) => {
          console.log(data);
          //open bootstrap modal here
          this.modalTitle = "Produce Catering";
          this.modalContent = "Escandallo " + this.oEscandallo2Send.id + " creado";
          this.showModal();
        }, error: (error: any) => {
          console.log(error);
          const wapper = document.createElement('div');

          if (error.error.message == "error de validación: campo DNI de Usuario") {
            wapper.innerHTML = [
              `<div class="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>DNI inexistente!</strong>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`
            ].join('');
          } else {
            wapper.innerHTML = [
              `<div class="alert alert-danger alert-dismissible fade show" role="alert">
              <strong>Login duplicado!</strong>
              <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
              </div>`
            ].join('');
          }
          const alertPlaceholder = document.getElementById('alert');
          alertPlaceholder.append(wapper);
          setTimeout(() => {
            wapper.classList.add('d-none');
          }, 5000);
        }
      })
    } else {
      //console.log("Formulario no válido");
      //alert("Formulario no válido");
    }
  }

  showModal = () => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/escandallo/plist'])
    })
    this.myModal.show()
  }

  openModalFindTipoplato(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findtipoplato"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()


  }

  closeTipoPlatoModal(id_tipoplato: number) {
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
        this.oForm.controls['id_tipoplato'].setErrors({ 'incorrect': true });
      }
    })
  }



}
