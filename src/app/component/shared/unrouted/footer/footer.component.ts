import { Component, OnInit } from '@angular/core';
import { Events, SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  strUserName: string = "";

  constructor(
    private oSessionService: SessionService,
  ) {
    this.strUserName = oSessionService.getUserName();
  }

  ngOnInit() {
    this.oSessionService.on(Events.login).subscribe(
      (data: any) => {
        this.strUserName = this.oSessionService.getUserName();
      });
    this.oSessionService.on(Events.logout).subscribe(
      (data: any) => {
        this.strUserName = '';
      });
  }

}


