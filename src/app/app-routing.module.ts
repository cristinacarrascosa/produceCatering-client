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


const routes: Routes = [
  { path: '', component: HomeComponent },
  //
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},

  { path: 'admin/random/load', component: GenerateComponent},
  { path: 'admin/tipousuario/plist', component: TipousuarioPlistAdminRoutedComponent },
  //usuario
  { path: 'admin/usuario/view/:id', component: UsuarioViewAdminRoutedComponent },
  { path: 'admin/usuario/plist', component: UsuarioPlistAdminRoutedComponent},
  { path: 'admin/usuario/remove/:id', component: UsuarioRemoveAdminRoutedComponent},
  { path: 'admin/usuario/new', component: UsuarioNewAdminRoutedComponent},
  { path: 'admin/usuario/edit/:id', component: UsuarioEditAdminRoutedComponent},
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
