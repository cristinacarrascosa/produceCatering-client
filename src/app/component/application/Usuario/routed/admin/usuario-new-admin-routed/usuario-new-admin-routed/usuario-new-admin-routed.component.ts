import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario, IUsuario2Form, IUsuario2Send } from 'src/app/model/usuario-interface';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ITipousuario } from '../../../../../../../model/tipousuario-interface';
import { Location } from '@angular/common';
import { MetadataService } from 'src/app/service/metadata.service';

declare let bootstrap: any;
@Component({
  selector: 'app-usuario-new-admin-routed',
  templateUrl: './usuario-new-admin-routed.component.html',
  styleUrls: ['./usuario-new-admin-routed.component.css']
})
export class UsuarioNewAdminRoutedComponent implements OnInit {

  //id: number = 0;
  oUsuario: IUsuario = null;
  oUsuario2Form: IUsuario2Form;
  oUsuario2Send: IUsuario2Send;
  oForm: FormGroup<IUsuario2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  // foreign key
  tipousuarioDescription: string = "";



  constructor(
    private oRouter: Router,
    protected oLocation: Location,
    public oMetadataService: MetadataService,
    private oActivatedRoute: ActivatedRoute,
    private oUsuarioService: UsuarioService,
    private oFormBuilder: FormBuilder,
    private oTipousuarioService: TipousuarioService
  ) {
    //this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      nombre: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      apellidos: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(60)]],
      dni: ["", [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
      email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      login: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(15)]],
      id_tipousuario: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
    });
  }



  onSubmit() {
    console.log("onSubmit");
    this.oUsuario2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      apellidos: this.oForm.value.apellidos,
      dni: this.oForm.value.dni,
      email: this.oForm.value.email,
      login: this.oForm.value.login,
      tipousuario: { id: this.oForm.value.id_tipousuario }

    }
    if (this.oForm.valid) {
      this.oUsuarioService.newOne(this.oUsuario2Send).subscribe({
        next: (data: number) => {
          console.log(data);
          //open bootstrap modal here
          this.modalTitle = "Produce Catering";
          this.modalContent = "Usuario " + this.oUsuario2Send.id + " creado";
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
      this.oRouter.navigate(['/admin/usuario/plist'])
    })
    this.myModal.show()
  }

  openModalFindTipousuario(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findtipousuario"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()


  }

  closeTipousuarioModal(id_tipousuario: number) {
    this.oForm.controls['id_tipousuario'].setValue(id_tipousuario);
    this.updateTipousuarioDescription(id_tipousuario);
    this.myModal.hide();
  }

  updateTipousuarioDescription(id_tipousuario: number) {
    this.oTipousuarioService.getOne(id_tipousuario).subscribe({
      next: (data: ITipousuario) => {
        this.tipousuarioDescription = data.tipo;
      },
      error: (error: any) => {
        this.tipousuarioDescription = "Tipo de usuario no encontrado";
        this.oForm.controls['id_tipousuario'].setErrors({ 'incorrect': true });
      }
    })
  }

  openModalFindUsertype(): void {

  }


}
