import { Component, OnInit } from '@angular/core';
import { ITipoplato, ITipoplato2Form, ITipoplato2Send } from '../../../../../../model/tipoplato-interface';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { TipoplatoService } from 'src/app/service/tipoplato.service';

declare let bootstrap: any;

@Component({
  selector: 'app-tipoplato-new-admin-routed',
  templateUrl: './tipoplato-new-admin-routed.component.html',
  styleUrls: ['./tipoplato-new-admin-routed.component.css']
})
export class TipoplatoNewAdminRoutedComponent implements OnInit{

  //id: number = 0;
  oTipoplato: ITipoplato = null;
  oTipoplato2Form: ITipoplato2Form;
  oTipoplato2Send: ITipoplato2Send;
  oForm: FormGroup<ITipoplato2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";




  constructor(
    private oRouter: Router,
    protected oLocation: Location,
    public oMetadataService: MetadataService,
    private oActivatedRoute: ActivatedRoute,
    private oFormBuilder: FormBuilder,
    private oTipoplatoService: TipoplatoService

  ) {}

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      nombre: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
    });
  }



  onSubmit() {

    this.oTipoplato2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,


    }
    if (this.oForm.valid) {
      this.oTipoplatoService.newOne(this.oTipoplato2Send).subscribe({
        next: (data: number) => {
          console.log(data);
          //open bootstrap modal here
          this.modalTitle = "Produce Catering";
          this.modalContent = "Tipo de plato " + this.oTipoplato2Send.id + " creado";
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
      this.oRouter.navigate(['/admin/tipoplato/plist'])
    })
    this.myModal.show()
  }

  openModalFindTipousuario(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findtipousuario"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()


  }

 


}
