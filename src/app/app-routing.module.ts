import { NgModule } from '@angular/core';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { TipousuarioPlistAdminRoutedComponent } from './component/application/TipoUsuario/routed/admin/tipousuario-plist-admin-routed/tipousuario-plist-admin-routed.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'admin/tipousuario/plist', component: TipousuarioPlistAdminRoutedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
