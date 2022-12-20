import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IUser } from 'src/app/model/shared-interface';
import { MetadataService } from 'src/app/service/metadata.service';
import { SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  strOperation: string = "logout"
  oUserSession: IUser;

  constructor(
    private oRoute: ActivatedRoute,
    private oRouter: Router,
    private oSessionService: SessionService,
    protected oLocation: Location,
    public oMetadataService: MetadataService
  ) {
    // if (this.oRoute.snapshot.data.message) {
    //   this.oUserSession = this.oRoute.snapshot.data.message;
    //   localStorage.setItem("user", JSON.stringify(this.oRoute.snapshot.data.message));
    // } else {
    //   localStorage.clear();
    //   oRouter.navigate(['/home']);
    // }
   }

  //  public closeSession() {
  //   this.oSessionService.logout().subscribe(data => {
  //     localStorage.clear();
  //     this.oRouter.navigate(['/','home']);
  //   });
  // }

  ngOnInit(): void {
  }



}
