import { Component } from '@angular/core';
import { TipousuarioService } from '../../../../../../service/tipousuario.service';
import { ITipousuario, TipoUsuarioResponse } from '../../../../../../model/tipousuario-interface';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tipousuario-plist-admin-routed',
  templateUrl: './tipousuario-plist-admin-routed.component.html',
  styleUrls: ['./tipousuario-plist-admin-routed.component.css']
})
export class TipousuarioPlistAdminRoutedComponent {

    constructor( private oTipousuarioService: TipousuarioService) { }

    private pListContent!: ITipousuario[];
    private pagesCount!: number;
    private numberPage: number = 0;
    private pageRegister: number = 5;

    ngOnInit(): void {
      this.getPlist();
    }

    getPlist(){
      this.oTipousuarioService.getTipousuarioPlist(this.numberPage, this.pageRegister)
      .subscribe({
        next: (resp : TipoUsuarioResponse) =>{
          this.pListContent = resp.content;
          this.pagesCount = resp.totalPages;
        },
        error: (err: HttpErrorResponse) =>{
          console.log(err);
        }
      })
    }

    getPlistContent(): ITipousuario[]{
      return this.pListContent;
    }

    getpagesCount(): number{
      return this.pagesCount;
    }

    getNumberPage( e: number ){
      this.numberPage = e;
      this.getPlist();
    }

    getPageRegister():number{
      return this.pageRegister;
    }

    setPageRegister( registerPage: number ){
      this.pageRegister = registerPage;
      this.getPlist();
    }

}
