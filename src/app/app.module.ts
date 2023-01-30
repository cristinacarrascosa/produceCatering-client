import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/** Admin */
// usuario
import { TipousuarioPlistAdminRoutedComponent } from './component/application/TipoUsuario/routed/admin/tipousuario-plist-admin-routed/tipousuario-plist-admin-routed.component';
import { UsuarioViewAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-view-admin-routed/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { UsuarioPlistAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-plist-admin-routed/usuario-plist-admin-routed/usuario-plist-admin-routed.component';

import { UsuarioRemoveAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-remove-admin-routed/usuario-remove-admin-routed/usuario-remove-admin-routed.component';
import { UsuarioDetailAdminUnroutedComponent } from './component/application/Usuario/unrouted/admin/usuario-detail-admin-unrouted/usuario-detail-admin-unrouted/usuario-detail-admin-unrouted.component';
import { UsuarioNewAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-new-admin-routed/usuario-new-admin-routed/usuario-new-admin-routed.component';
import { UsuarioEditAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-edit-admin-routed/usuario-edit-admin-routed/usuario-edit-admin-routed.component';
import { TipousuarioFinderAdminUnroutedComponent } from './component/application/TipoUsuario/unrouted/admin/tipousuario-finder-admin-unrouted/tipousuario-finder-admin-unrouted/tipousuario-finder-admin-unrouted.component';
// espacio
import { EspacioViewAdminRoutedComponent } from './component/application/Espacio/routed/admin/espacio-view-admin-routed/espacio-view-admin-routed.component';
import { EspacioPlistAdminRoutedComponent } from './component/application/Espacio/routed/admin/espacio-plist-admin-routed/espacio-plist-admin-routed.component';

//


import { UsuarioService } from './service/usuario.service';
import { SessionService } from './service/session.service';
// shared components
import { GenerateComponent } from './component/shared/routed/generate/generate.component';
import { PopupComponent } from './component/shared/unrouted/popup/popup.component';
import { LoginComponent } from './component/shared/routed/login/login/login.component';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { MenuComponent } from './component/shared/unrouted/menu/menu/menu.component';
import { SearchUnroutedComponent } from './component/shared/unrouted/search-unrouted/search-unrouted/search-unrouted.component';
import { DropdownRegisterPageComponent } from './component/shared/unrouted/dropdown-register-page/dropdown-register-page.component';
import { PaginationUnroutedComponent } from './component/shared/unrouted/pagination-unrouted/pagination-unrouted/pagination-unrouted.component';




import { PaginationService } from './service/pagination.service';
import { TipousuarioService } from './service/tipousuario.service';
import { EspacioService } from './service/espacio.service';
import { EspacioRemoveAdminRoutedComponent } from './component/application/Espacio/routed/admin/espacio-remove-admin-routed/espacio-remove-admin-routed.component';
import { EspacioNewAdminRoutedComponent } from './component/application/Espacio/routed/admin/espacio-new-admin-routed/espacio-new-admin-routed.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    TipousuarioPlistAdminRoutedComponent,
    UsuarioViewAdminRoutedComponent,
    UsuarioPlistAdminRoutedComponent,
    SearchUnroutedComponent,
    DropdownRegisterPageComponent,
    PaginationUnroutedComponent,
    UsuarioRemoveAdminRoutedComponent,
    UsuarioDetailAdminUnroutedComponent,
    UsuarioNewAdminRoutedComponent,
    UsuarioEditAdminRoutedComponent,
    TipousuarioFinderAdminUnroutedComponent,
    LoginComponent,
    GenerateComponent,
    PopupComponent,
    EspacioViewAdminRoutedComponent,
    EspacioPlistAdminRoutedComponent,
    EspacioRemoveAdminRoutedComponent,
    EspacioNewAdminRoutedComponent,





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,




  ],
  providers: [
    UsuarioService,
    SessionService,
    


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
