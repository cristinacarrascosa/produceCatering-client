import { Component, OnInit } from '@angular/core';
import { Events, SessionService } from 'src/app/service/session.service';
import { IUser } from '../../../../../model/shared-interface';
import { NavigationEnd, Router } from '@angular/router';
import { MetadataService } from 'src/app/service/metadata.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  oUsuarioSession: any;
  strTipoUsuario: string = "";
  strUrl: String = "";
  strId: number = 0;

  strUserName: string = "";

  constructor(
    private oSessionService: SessionService,
    private router: Router,
    public oMetadataService: MetadataService
    ) {
      // this.oUsuarioSession = JSON.parse(localStorage.getItem("user"));
      // this.router.events.subscribe((ev) => {
      //   if (ev instanceof NavigationEnd) {
      //     this.strUrl = ev.url;
      //   }
      // })

      this.strUserName = oSessionService.getUserName();
      this.strTipoUsuario = oSessionService.getTipoUsuario();
      if(this.strUserName){
        this.oSessionService.getUserId().subscribe({
          next: (n: number) => {
            this.strId = n
          }
        })

    }


    }

  ngOnInit(): void {
    this.oSessionService.on(Events.login).subscribe(
      (data: string) => {
        this.strUserName = this.oSessionService.getUserName();
        console.log(this.strUserName);

      });
    this.oSessionService.on(Events.logout).subscribe(
      (data: string) => {
        this.strUserName = '';
      });

  }


  // logout(){
  //   this.oSessionService.logout()
  // }



}
