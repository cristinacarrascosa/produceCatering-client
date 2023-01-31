import { Component, OnInit } from '@angular/core';
import { ISalon } from 'src/app/model/salon-interface';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { SalonService } from 'src/app/service/salon.service';


@Component({
  selector: 'app-salon-remove-admin-routed',
  templateUrl: './salon-remove-admin-routed.component.html',
  styleUrls: ['./salon-remove-admin-routed.component.css']
})
export class SalonRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  msg: string = "";
  oSalon!: ISalon;

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oSalonService: SalonService
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }


    ngOnInit(): void {
      this.getOne();
    }

    getOne() {
      this.oSalonService.getOne(this.id).subscribe({
        next: (data: ISalon) => {
          this.oSalon = data;
          console.log(data);
        }
      })
    }

    removeOne() {
      this.oSalonService.removeOne(this.id).subscribe({
        next: (data: number) => {
          this.msg = "Salon " + this.id + " borrado";
          //open bootstrap modal here
          alert(this.msg);
          this.oLocation.back();
        }
      })
    }

}

