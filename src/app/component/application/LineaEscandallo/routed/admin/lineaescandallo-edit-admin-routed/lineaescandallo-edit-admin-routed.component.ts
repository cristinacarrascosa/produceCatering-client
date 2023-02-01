import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ILineaescandallo, ILineaescandallo2Form, ILineaescandallo2Send } from 'src/app/model/lineaescandallo';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { LineaescandalloService } from 'src/app/service/lineaescandallo.service';
import { EscandalloService } from 'src/app/service/escandallo.service';
import { ReferenciaService } from 'src/app/service/referencia.service';
import { IEscandallo } from '../../../../../../model/escandallo-interface';
import { IReferencia } from '../../../../../../model/referencia-interface';

declare let bootstrap: any;


@Component({
  selector: 'app-lineaescandallo-edit-admin-routed',
  templateUrl: './lineaescandallo-edit-admin-routed.component.html',
  styleUrls: ['./lineaescandallo-edit-admin-routed.component.css']
})
export class LineaescandalloEditAdminRoutedComponent implements OnInit {

  id: number = 0;
  oLineaescandallo: ILineaescandallo;

  oLineaescandallo2Form: ILineaescandallo2Form;
  oLineaescandallo2Send: ILineaescandallo2Send;
  oForm: FormGroup<ILineaescandallo2Form>;
  // modal
  mimodal: string = 'miModal';
  myModal: any;
  modalTitle: string = '';
  modalContent: string = '';
  // foreign key
  escandalloDescription: string = '';
  referenciaDescription: string = '';
  //


  constructor(
    private oRouter: Router,
    protected oLocation: Location,
    public oMetadataService: MetadataService,
    private oActivatedRoute: ActivatedRoute,
    private oFormBuilder: FormBuilder,
    private oLineaescandalloService: LineaescandalloService,
    private oEscandalloService: EscandalloService,
    private oReferenciaService: ReferenciaService
  ) {
    this.id = this.oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oLineaescandalloService.getOne(this.id).subscribe({
      next: (data: ILineaescandallo) => {
        this.oLineaescandallo = data;
        console.log('datos: ' + data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          id_escandallo: ['',[Validators.required, Validators.pattern(/^\d{1,6}$/)],
          ],
          id_referencia: ['',[Validators.required, Validators.pattern(/^\d{1,6}$/)],
          ],
        });
        this.updateEscandalloDescription(this.oLineaescandallo.escandallo.id);
        this.updateReferenciaDescription(this.oLineaescandallo.referencia.id);
      },
    });
  }

  onSubmit() {
    console.log('onSubmit');
    this.oLineaescandallo2Send = {
      id: this.oForm.value.id,
      escandallo: { id: this.oForm.value.id_escandallo },
      referencia: { id: this.oForm.value.id_referencia },
    };
    if (this.oForm.valid) {
      this.oLineaescandalloService.updateOne(this.oLineaescandallo2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = 'Produce Catering';
          this.modalContent = 'Linea de escandallo ' + this.id + ' actualizado';
          this.showModal();
        },
      });
    }
  }

  showModal = () => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), {
      //pasar el myModal como parametro
      keyboard: false,
    });
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/lineaescandallo/view', this.id]);
    });
    this.myModal.show();
  };
  // foreign key escandallo
  openModalFindEscandallo(): void {
    this.myModal = new bootstrap.Modal(
      document.getElementById('findEscandallo'),
      {
        //pasar el myModal como parametro
        keyboard: false,
      }
    );
    this.myModal.show();
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
        this.escandalloDescription = 'Escandallo no encontrado';
        this.oForm.controls['id_escandallo'].setErrors({ incorrect: true });
      },
    });
  }

  // foreign key referencia
  openModalFindReferencia(): void {
    this.myModal = new bootstrap.Modal(
      document.getElementById('findReferencia'),
      {
        //pasar el myModal como parametro
        keyboard: false,
      }
    );
    this.myModal.show();
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
        this.referenciaDescription = 'Referencia no encontrado';
        this.oForm.controls['id_referencia'].setErrors({ incorrect: true });
      },
    });
  }


}

