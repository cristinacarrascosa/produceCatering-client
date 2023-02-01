import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {CalendarModule} from 'primeng/calendar';

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
import { EspacioRemoveAdminRoutedComponent } from './component/application/Espacio/routed/admin/espacio-remove-admin-routed/espacio-remove-admin-routed.component';
import { EspacioNewAdminRoutedComponent } from './component/application/Espacio/routed/admin/espacio-new-admin-routed/espacio-new-admin-routed.component';
import { EspacioEditAdminRoutedComponent } from './component/application/Espacio/routed/admin/espacio-edit-admin-routed/espacio-edit-admin-routed.component';

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
import { SalonPlistAdminRoutedComponent } from './component/application/Salon/routed/admin/salon-plist-admin-routed/salon-plist-admin-routed.component';
import { SalonViewAdminRoutedComponent } from './component/application/Salon/routed/admin/salon-view-admin-routed/salon-view-admin-routed.component';
import { SalonRemoveAdminRoutedComponent } from './component/application/Salon/routed/admin/salon-remove-admin-routed/salon-remove-admin-routed.component';
import { SalonNewAdminRoutedComponent } from './component/application/Salon/routed/admin/salon-new-admin-routed/salon-new-admin-routed.component';
import { EspacioFinderAdminUnroutedComponent } from './component/application/Espacio/unrouted/admin/espacio-finder-admin-unrouted/espacio-finder-admin-unrouted.component';
import { SalonEditAdminRoutedComponent } from './component/application/Salon/routed/admin/salon-edit-admin-routed/salon-edit-admin-routed.component';
import { ServicioPlistAdminRoutedComponent } from './component/application/Servicio/routed/admin/servicio-plist-admin-routed/servicio-plist-admin-routed.component';
import { ServicioViewAdminRoutedComponent } from './component/application/Servicio/routed/admin/servicio-view-admin-routed/servicio-view-admin-routed.component';
import { ServicioRemoveAdminRoutedComponent } from './component/application/Servicio/routed/admin/servicio-remove-admin-routed/servicio-remove-admin-routed.component';
import { ServicioNewAdminRoutedComponent } from './component/application/Servicio/routed/admin/servicio-new-admin-routed/servicio-new-admin-routed.component';
import { SalonFinderAdminUnroutedComponent } from './component/application/Salon/unrouted/admin/salon-finder-admin-unrouted/salon-finder-admin-unrouted.component';
import { UsuarioFinderAdminUnroutedComponent } from './component/application/Usuario/unrouted/admin/usuario-finder-admin-unrouted/usuario-finder-admin-unrouted.component';
import { ServicioEditAdminRoutedComponent } from './component/application/Servicio/routed/admin/servicio-edit-admin-routed/servicio-edit-admin-routed.component';
import { TipoplatoPlistAdminRoutedComponent } from './component/application/TipoPlato/routed/admin/tipoplato-plist-admin-routed/tipoplato-plist-admin-routed.component';
import { TipoplatoViewAdminRoutedComponent } from './component/application/TipoPlato/routed/admin/tipoplato-view-admin-routed/tipoplato-view-admin-routed.component';
import { TipoplatoRemoveAdminRoutedComponent } from './component/application/TipoPlato/routed/admin/tipoplato-remove-admin-routed/tipoplato-remove-admin-routed.component';
import { TipoplatoNewAdminRoutedComponent } from './component/application/TipoPlato/routed/admin/tipoplato-new-admin-routed/tipoplato-new-admin-routed.component';
import { TipoplatoEditAdminRoutedComponent } from './component/application/TipoPlato/routed/admin/tipoplato-edit-admin-routed/tipoplato-edit-admin-routed.component';
import { EscandalloPlistAdminRoutedComponent } from './component/application/Escandallo/routed/admin/escandallo-plist-admin-routed/escandallo-plist-admin-routed.component';
import { EscandalloViewAdminRoutedComponent } from './component/application/Escandallo/routed/admin/escandallo-view-admin-routed/escandallo-view-admin-routed.component';
import { EscandalloRemoveAdminRoutedComponent } from './component/application/Escandallo/routed/admin/escandallo-remove-admin-routed/escandallo-remove-admin-routed.component';

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
    EspacioEditAdminRoutedComponent,
    SalonPlistAdminRoutedComponent,
    SalonViewAdminRoutedComponent,
    SalonRemoveAdminRoutedComponent,
    SalonNewAdminRoutedComponent,
    EspacioFinderAdminUnroutedComponent,
    SalonEditAdminRoutedComponent,
    ServicioPlistAdminRoutedComponent,
    ServicioViewAdminRoutedComponent,
    ServicioRemoveAdminRoutedComponent,
    ServicioNewAdminRoutedComponent,
    SalonFinderAdminUnroutedComponent,
    UsuarioFinderAdminUnroutedComponent,
    ServicioEditAdminRoutedComponent,
    TipoplatoPlistAdminRoutedComponent,
    TipoplatoViewAdminRoutedComponent,
    TipoplatoRemoveAdminRoutedComponent,
    TipoplatoNewAdminRoutedComponent,
    TipoplatoEditAdminRoutedComponent,
    EscandalloPlistAdminRoutedComponent,
    EscandalloViewAdminRoutedComponent,
    EscandalloRemoveAdminRoutedComponent,






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
    CalendarModule




  ],
  providers: [
    UsuarioService,
    SessionService,



  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
