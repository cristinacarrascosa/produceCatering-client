import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/service/session.service';
import { IUser } from '../../../../../model/shared-interface';
import { NavigationEnd, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  oUsuarioSession: IUser;
  strUserName: string = "";
  strUrl: String = "";

  constructor(
    private oSessionService: SessionService,
    private router: Router,
    public oMetadataService: MetadataService
    ) {
      this.oUsuarioSession = JSON.parse(localStorage.getItem("user"));
      this.router.events.subscribe((ev) => {
        if (ev instanceof NavigationEnd) {
          this.strUrl = ev.url;
        }
      })

    }

  ngOnInit(): void {

  }

  logout(){
    this.oSessionService.logout()
  }



}
