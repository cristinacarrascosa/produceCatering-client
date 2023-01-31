import { Component, OnInit } from '@angular/core';
import { ISalon } from 'src/app/model/salon-interface';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';
import { SalonService } from 'src/app/service/salon.service';



@Component({
  selector: 'app-salon-view-admin-routed',
  templateUrl: './salon-view-admin-routed.component.html',
  styleUrls: ['./salon-view-admin-routed.component.css']
})
export class SalonViewAdminRoutedComponent implements OnInit {

  id: number = 0;
  oSalon!: ISalon;

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    public oMetadataService: MetadataService,
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

      }
    })
  }
}


