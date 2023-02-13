import { Component, OnInit } from '@angular/core';
import { Events, SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  strUserName: string = "";
  oUsuarioSession: any;
  strTipoUsuario: string = "";
  strUrl: String = "";
  strId: number = 0;

  constructor(
    private oSessionService: SessionService,

  ) {
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
        //console.log(this.strUserName);

      });
      this.oSessionService.on(Events.logout).subscribe(
        (data: string) => {
          this.strUserName = '';
        });
  }

}

