import { Component, OnInit } from '@angular/core';
import { ITipoplato, ITipoplato2Form, ITipoplato2Send } from '../../../../../../model/tipoplato-interface';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
import { MetadataService } from 'src/app/service/metadata.service';
import { ActivatedRoute, Router } from '@angular/router';
import { TipoplatoService } from 'src/app/service/tipoplato.service';

declare let bootstrap: any;


@Component({
  selector: 'app-tipoplato-edit-admin-routed',
  templateUrl: './tipoplato-edit-admin-routed.component.html',
  styleUrls: ['./tipoplato-edit-admin-routed.component.css']
})
export class TipoplatoEditAdminRoutedComponent implements OnInit {

  id: number = 0;
  oTipoplato: ITipoplato;


  oTipoplato2Form: ITipoplato2Form;
  oTipoplato2Send: ITipoplato2Send;
  oForm: FormGroup<ITipoplato2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";


  constructor(
    public oMetadataService: MetadataService,
    protected oLocation: Location,
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oTipoplatoService: TipoplatoService,
    private oFormBuilder: FormBuilder,

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
        console.log("datos: "+data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          nombre: [data.nombre, [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],

        });

      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oTipoplato2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,


    }
    if (this.oForm.valid) {
      this.oTipoplatoService.updateOne(this.oTipoplato2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "Produce Catering";
          this.modalContent = "Tipo de plato " + this.id + " actualizado";
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
      this.oRouter.navigate(['/admin/tipoplato/view', this.id])
    })
    this.myModal.show()
  }

 

}

