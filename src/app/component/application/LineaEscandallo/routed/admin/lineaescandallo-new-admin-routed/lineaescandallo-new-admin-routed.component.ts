import { Component, OnInit } from '@angular/core';
import { ILineaescandallo, ILineaescandallo2Form, ILineaescandallo2Send } from '../../../../../../model/lineaescandallo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { LineaescandalloService } from 'src/app/service/lineaescandallo.service';
import { EscandalloService } from '../../../../../../service/escandallo.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { ReferenciaService } from 'src/app/service/referencia.service';
import { IEscandallo } from 'src/app/model/escandallo-interface';
import { IReferencia } from '../../../../../../model/referencia-interface';


declare let bootstrap: any;

@Component({
  selector: 'app-lineaescandallo-new-admin-routed',
  templateUrl: './lineaescandallo-new-admin-routed.component.html',
  styleUrls: ['./lineaescandallo-new-admin-routed.component.css']
})
export class LineaescandalloNewAdminRoutedComponent implements OnInit {

  oLineaescandallo: ILineaescandallo = null;
  oLineaescandallo2Form: ILineaescandallo2Form;
  oLineaescandallo2Send: ILineaescandallo2Send;
  oForm: FormGroup<ILineaescandallo2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  // foreign key
  escandalloDescription: string = "";
  referenciaDescription: string = "";
//
fechahora: Date;


  constructor(
    private oRouter: Router,
    protected oLocation: Location,
    public oMetadataService: MetadataService,
    private oActivatedRoute: ActivatedRoute,
    private oFormBuilder: FormBuilder,
    private oLineaescandalloService: LineaescandalloService,
    private oEscandalloService: EscandalloService,
    private oReferenciaService: ReferenciaService
  ) { }



  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      id_escandallo: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]],
      id_referencia: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
    });
  }

  onSubmit() {
    console.log("onSubmit");
    this.oLineaescandallo2Send = {
      id: this.oForm.value.id,
      escandallo: { id: this.oForm.value.id_escandallo },
      referencia: { id: this.oForm.value.id_referencia }

    }
    if (this.oForm.valid) {
      this.oLineaescandalloService.newOne(this.oLineaescandallo2Send).subscribe({
        next: (data: number) => {
          console.log(data);
          //open bootstrap modal here
          this.modalTitle = "Produce Catering";
          this.modalContent = "Linea de Escandallo " + this.oLineaescandallo2Send.id + " creada";
          this.showModal();
        }, error: (error: any) => {
          console.log(error);
          const wapper = document.createElement('div');

          // if (error.error.message == "error de validación: campo DNI de Usuario") {
          //   wapper.innerHTML = [
          //     `<div class="alert alert-danger alert-dismissible fade show" role="alert">
          //     <strong>DNI inexistente!</strong>
          //     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          //   </div>`
          //   ].join('');
          // } else {
          //   wapper.innerHTML = [
          //     `<div class="alert alert-danger alert-dismissible fade show" role="alert">
          //     <strong>Login duplicado!</strong>
          //     <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          //     </div>`
          //   ].join('');
          // }
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
      this.oRouter.navigate(['/admin/lineaescandallo/plist'])
    })
    this.myModal.show()
  }

  // foreign key escandallo
  openModalFindEscandallo(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findEscandallo"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()


  }

  closeEscandalloModal(id_escandallo: number) {
    this.oForm.controls['id_escandallo'].setValue(id_escandallo);
    this.updateEscandalloDescription(id_escandallo);
    this.myModal.hide();
  }

  updateEscandalloDescription(id_escandallo: number) {
    this.oEscandalloService.getOne(id_escandallo).subscribe({
      next: (data: IEscandallo) => {
        this.escandalloDescription = data.nombre;
      },
      error: (error: any) => {
        this.escandalloDescription = "Escandallo no encontrado";
        this.oForm.controls['id_escandallo'].setErrors({ 'incorrect': true });
      }
    })
  }

  // foreign key referencia
  openModalFindReferencia(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findReferencia"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()


  }

  closeReferenciaModal(id_referencia: number) {
    this.oForm.controls['id_referencia'].setValue(id_referencia);
    this.updateReferenciaDescription(id_referencia);
    this.myModal.hide();
  }

  updateReferenciaDescription(id_referencia: number) {
    this.oReferenciaService.getOne(id_referencia).subscribe({
      next: (data: IReferencia) => {
        this.referenciaDescription = data.nombre;
      },
      error: (error: any) => {
        this.referenciaDescription = "Referencia no encontrado";
        this.oForm.controls['id_referencia'].setErrors({ 'incorrect': true });
      }
    })
  }

}

