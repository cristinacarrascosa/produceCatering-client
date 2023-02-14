import { NgModule } from '@angular/core';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TipousuarioPlistAdminRoutedComponent } from './component/application/TipoUsuario/routed/admin/tipousuario-plist-admin-routed/tipousuario-plist-admin-routed.component';
import { UsuarioViewAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-view-admin-routed/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { UsuarioPlistAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-plist-admin-routed/usuario-plist-admin-routed/usuario-plist-admin-routed.component';
import { UsuarioRemoveAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-remove-admin-routed/usuario-remove-admin-routed/usuario-remove-admin-routed.component';
import { UsuarioNewAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-new-admin-routed/usuario-new-admin-routed/usuario-new-admin-routed.component';
import { UsuarioEditAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-edit-admin-routed/usuario-edit-admin-routed/usuario-edit-admin-routed.component';
import { LoginComponent } from './component/shared/routed/login/login/login.component';
import { GenerateComponent } from './component/shared/routed/generate/generate.component';
import { EspacioViewAdminRoutedComponent } from './component/application/Espacio/routed/admin/espacio-view-admin-routed/espacio-view-admin-routed.component';
import { EspacioPlistAdminRoutedComponent } from './component/application/Espacio/routed/admin/espacio-plist-admin-routed/espacio-plist-admin-routed.component';
import { EspacioRemoveAdminRoutedComponent } from './component/application/Espacio/routed/admin/espacio-remove-admin-routed/espacio-remove-admin-routed.component';
import { EspacioNewAdminRoutedComponent } from './component/application/Espacio/routed/admin/espacio-new-admin-routed/espacio-new-admin-routed.component';
import { EspacioEditAdminRoutedComponent } from './component/application/Espacio/routed/admin/espacio-edit-admin-routed/espacio-edit-admin-routed.component';
import { SalonPlistAdminRoutedComponent } from './component/application/Salon/routed/admin/salon-plist-admin-routed/salon-plist-admin-routed.component';
import { SalonViewAdminRoutedComponent } from './component/application/Salon/routed/admin/salon-view-admin-routed/salon-view-admin-routed.component';
import { SalonRemoveAdminRoutedComponent } from './component/application/Salon/routed/admin/salon-remove-admin-routed/salon-remove-admin-routed.component';
import { SalonNewAdminRoutedComponent } from './component/application/Salon/routed/admin/salon-new-admin-routed/salon-new-admin-routed.component';
import { SalonEditAdminRoutedComponent } from './component/application/Salon/routed/admin/salon-edit-admin-routed/salon-edit-admin-routed.component';
import { ServicioPlistAdminRoutedComponent } from './component/application/Servicio/routed/admin/servicio-plist-admin-routed/servicio-plist-admin-routed.component';
import { ServicioViewAdminRoutedComponent } from './component/application/Servicio/routed/admin/servicio-view-admin-routed/servicio-view-admin-routed.component';
import { ServicioRemoveAdminRoutedComponent } from './component/application/Servicio/routed/admin/servicio-remove-admin-routed/servicio-remove-admin-routed.component';
import { ServicioNewAdminRoutedComponent } from './component/application/Servicio/routed/admin/servicio-new-admin-routed/servicio-new-admin-routed.component';
import { ServicioEditAdminRoutedComponent } from './component/application/Servicio/routed/admin/servicio-edit-admin-routed/servicio-edit-admin-routed.component';
import { TipoplatoPlistAdminRoutedComponent } from './component/application/TipoPlato/routed/admin/tipoplato-plist-admin-routed/tipoplato-plist-admin-routed.component';
import { TipoplatoViewAdminRoutedComponent } from './component/application/TipoPlato/routed/admin/tipoplato-view-admin-routed/tipoplato-view-admin-routed.component';
import { TipoplatoRemoveAdminRoutedComponent } from './component/application/TipoPlato/routed/admin/tipoplato-remove-admin-routed/tipoplato-remove-admin-routed.component';
import { TipoplatoNewAdminRoutedComponent } from './component/application/TipoPlato/routed/admin/tipoplato-new-admin-routed/tipoplato-new-admin-routed.component';
import { TipoplatoEditAdminRoutedComponent } from './component/application/TipoPlato/routed/admin/tipoplato-edit-admin-routed/tipoplato-edit-admin-routed.component';
import { EscandalloPlistAdminRoutedComponent } from './component/application/Escandallo/routed/admin/escandallo-plist-admin-routed/escandallo-plist-admin-routed.component';
import { EscandalloViewAdminRoutedComponent } from './component/application/Escandallo/routed/admin/escandallo-view-admin-routed/escandallo-view-admin-routed.component';
import { EscandalloRemoveAdminRoutedComponent } from './component/application/Escandallo/routed/admin/escandallo-remove-admin-routed/escandallo-remove-admin-routed.component';
import { EscandalloNewAdminRoutedComponent } from './component/application/Escandallo/routed/admin/escandallo-new-admin-routed/escandallo-new-admin-routed.component';
import { EscandalloEditAdminRoutedComponent } from './component/application/Escandallo/routed/admin/escandallo-edit-admin-routed/escandallo-edit-admin-routed.component';
import { ReferenciaPlistAdminRoutedComponent } from './component/application/Referencia/routed/admin/referencia-plist-admin-routed/referencia-plist-admin-routed.component';
import { ReferenciaViewAdminRoutedComponent } from './component/application/Referencia/routed/admin/referencia-view-admin-routed/referencia-view-admin-routed.component';
import { ReferenciaRemoveAdminRoutedComponent } from './component/application/Referencia/routed/admin/referencia-remove-admin-routed/referencia-remove-admin-routed.component';
import { ReferenciaNewAdminRoutedComponent } from './component/application/Referencia/routed/admin/referencia-new-admin-routed/referencia-new-admin-routed.component';
import { ReferenciaEditAdminRoutedComponent } from './component/application/Referencia/routed/admin/referencia-edit-admin-routed/referencia-edit-admin-routed.component';
import { LineaescandalloPlistAdminRoutedComponent } from './component/application/LineaEscandallo/routed/admin/lineaescandallo-plist-admin-routed/lineaescandallo-plist-admin-routed.component';
import { LineaescandalloViewAdminRoutedComponent } from './component/application/LineaEscandallo/routed/admin/lineaescandallo-view-admin-routed/lineaescandallo-view-admin-routed.component';
import { LineaescandalloRemoveAdminRoutedComponent } from './component/application/LineaEscandallo/routed/admin/lineaescandallo-remove-admin-routed/lineaescandallo-remove-admin-routed.component';
import { LineaescandalloNewAdminRoutedComponent } from './component/application/LineaEscandallo/routed/admin/lineaescandallo-new-admin-routed/lineaescandallo-new-admin-routed.component';
import { LineaescandalloEditAdminRoutedComponent } from './component/application/LineaEscandallo/routed/admin/lineaescandallo-edit-admin-routed/lineaescandallo-edit-admin-routed.component';
import { LineaservicioPlistAdminRoutedComponent } from './component/application/LineaServicio/routed/admin/lineaservicio-plist-admin-routed/lineaservicio-plist-admin-routed.component';
import { LineaservicioViewAdminRoutedComponent } from './component/application/LineaServicio/routed/admin/lineaservicio-view-admin-routed/lineaservicio-view-admin-routed.component';
import { LineaservicioRemoveAdminRoutedComponent } from './component/application/LineaServicio/routed/admin/lineaservicio-remove-admin-routed/lineaservicio-remove-admin-routed.component';
import { LineaservicioNewAdminRoutedComponent } from './component/application/LineaServicio/routed/admin/lineaservicio-new-admin-routed/lineaservicio-new-admin-routed.component';
import { LineaservicioEditAdminRoutedComponent } from './component/application/LineaServicio/routed/admin/lineaservicio-edit-admin-routed/lineaservicio-edit-admin-routed.component';
import { LogoutComponent } from './component/shared/routed/logout/logout.component';
import { UsuarioViewUserRoutedComponent } from './component/application/Usuario/routed/user/usuario-view-user-routed/usuario-view-user-routed.component';
import { ServicioPlistUserRoutedComponent } from './component/application/Servicio/routed/user/servicio-plist-user-routed/servicio-plist-user-routed.component';
import { ServicioViewUserRoutedComponent } from './component/application/Servicio/routed/user/servicio-view-user-routed/servicio-view-user-routed.component';
import { ServicioNewUserRoutedComponent } from './component/application/Servicio/routed/user/servicio-new-user-routed/servicio-new-user-routed.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  //
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'logout', component: LogoutComponent},
  { path: 'admin/random/load', component: GenerateComponent},

  //tipoUsuario
  { path: 'admin/tipousuario/plist', component: TipousuarioPlistAdminRoutedComponent },

  //usuario
  { path: 'admin/usuario/view/:id', component: UsuarioViewAdminRoutedComponent },
  { path: 'admin/usuario/plist', component: UsuarioPlistAdminRoutedComponent},
  { path: 'admin/usuario/remove/:id', component: UsuarioRemoveAdminRoutedComponent},
  { path: 'admin/usuario/new', component: UsuarioNewAdminRoutedComponent},
  { path: 'admin/usuario/edit/:id', component: UsuarioEditAdminRoutedComponent},
  { path: 'user/usuario/view/:id', component: UsuarioViewUserRoutedComponent },

  //espacio
  { path: 'admin/espacio/view/:id', component: EspacioViewAdminRoutedComponent },
  { path: 'admin/espacio/plist' , component: EspacioPlistAdminRoutedComponent},
  { path: 'admin/espacio/remove/:id', component: EspacioRemoveAdminRoutedComponent},
  { path: 'admin/espacio/new', component: EspacioNewAdminRoutedComponent},
  { path: 'admin/espacio/edit/:id', component: EspacioEditAdminRoutedComponent},

  // salon
  { path: 'admin/salon/plist', component: SalonPlistAdminRoutedComponent},
  { path: 'admin/salon/view/:id', component: SalonViewAdminRoutedComponent},
  { path: 'admin/salon/remove/:id', component: SalonRemoveAdminRoutedComponent},
  { path: 'admin/salon/new', component: SalonNewAdminRoutedComponent},
  { path: 'admin/salon/edit/:id', component: SalonEditAdminRoutedComponent},

  // servicio
  // admin
  { path: 'admin/servicio/plist', component: ServicioPlistAdminRoutedComponent},
  { path: 'admin/servicio/plist/usuario/:id', component: ServicioPlistAdminRoutedComponent},
  { path: 'admin/servicio/view/:id', component: ServicioViewAdminRoutedComponent},
  { path: 'admin/servicio/remove/:id', component: ServicioRemoveAdminRoutedComponent},
  { path: 'admin/servicio/new', component: ServicioNewAdminRoutedComponent},
  { path: 'admin/servicio/edit/:id', component: ServicioEditAdminRoutedComponent},
  // user
  { path: 'user/servicio/plist', component: ServicioPlistUserRoutedComponent},
  { path: 'user/servicio/view/:id', component: ServicioViewUserRoutedComponent},
  { path: 'user/servicio/new', component: ServicioNewUserRoutedComponent},

  // tipoplato
  { path: 'admin/tipoplato/plist', component: TipoplatoPlistAdminRoutedComponent},
  { path: 'admin/tipoplato/view/:id', component: TipoplatoViewAdminRoutedComponent},
  { path: 'admin/tipoplato/remove/:id', component: TipoplatoRemoveAdminRoutedComponent},
  { path: 'admin/tipoplato/new', component: TipoplatoNewAdminRoutedComponent},
  { path: 'admin/tipoplato/edit/:id', component: TipoplatoEditAdminRoutedComponent},

  // escandallo
  { path: 'admin/escandallo/plist', component: EscandalloPlistAdminRoutedComponent},
  { path: 'admin/escandallo/view/:id', component: EscandalloViewAdminRoutedComponent},
  { path: 'admin/escandallo/remove/:id', component: EscandalloRemoveAdminRoutedComponent},
  { path: 'admin/escandallo/new', component: EscandalloNewAdminRoutedComponent},
  { path: 'admin/escandallo/edit/:id', component: EscandalloEditAdminRoutedComponent},

  // referencia
  { path: 'admin/referencia/plist', component: ReferenciaPlistAdminRoutedComponent},
  { path: 'admin/referencia/view/:id', component: ReferenciaViewAdminRoutedComponent},
  { path: 'admin/referencia/remove/:id', component: ReferenciaRemoveAdminRoutedComponent},
  { path: 'admin/referencia/new', component: ReferenciaNewAdminRoutedComponent},
  { path: 'admin/referencia/edit/:id', component: ReferenciaEditAdminRoutedComponent},

  // lineaescandallo
  { path: 'admin/lineaescandallo/plist', component: LineaescandalloPlistAdminRoutedComponent},
  { path: 'admin/lineaescandallo/view/:id', component: LineaescandalloViewAdminRoutedComponent},
  { path: 'admin/lineaescandallo/remove/:id', component: LineaescandalloRemoveAdminRoutedComponent},
  { path: 'admin/lineaescandallo/new', component: LineaescandalloNewAdminRoutedComponent},
  { path: 'admin/lineaescandallo/edit/:id', component: LineaescandalloEditAdminRoutedComponent},
  
  // lineaservicio
  { path: 'admin/lineaservicio/plist', component: LineaservicioPlistAdminRoutedComponent},
  { path: 'admin/lineaservicio/plist/servicio:id_servicio', component: LineaservicioPlistAdminRoutedComponent},//para ver las lineas de un servicio
  { path: 'admin/lineaservicio/view/:id', component: LineaservicioViewAdminRoutedComponent},
  { path: 'admin/lineaservicio/remove/:id', component: LineaservicioRemoveAdminRoutedComponent},
  { path: 'admin/lineaservicio/new', component: LineaservicioNewAdminRoutedComponent},
  { path: 'admin/lineaservicio/edit/:id', component: LineaservicioEditAdminRoutedComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
