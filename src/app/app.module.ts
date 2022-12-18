import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { HomeComponent } from './component/shared/routed/home/home.component';
import { MenuComponent } from './component/shared/unrouted/menu/menu/menu.component';
import { TipousuarioPlistAdminRoutedComponent } from './component/application/TipoUsuario/routed/admin/tipousuario-plist-admin-routed/tipousuario-plist-admin-routed.component';
import { UsuarioViewAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-view-admin-routed/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { UsuarioPlistAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-plist-admin-routed/usuario-plist-admin-routed/usuario-plist-admin-routed.component';
import { SearchUnroutedComponent } from './component/application/Usuario/unrouted/search-unrouted/search-unrouted/search-unrouted.component';
import { DropdownRegisterPageComponent } from './component/application/Usuario/unrouted/dropdown-register-page/dropdown-register-page/dropdown-register-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PaginationUnroutedComponent } from './component/application/Usuario/unrouted/pagination-unrouted/pagination-unrouted/pagination-unrouted.component';
import { UsuarioRemoveAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-remove-admin-routed/usuario-remove-admin-routed/usuario-remove-admin-routed.component';
import { UsuarioDetailAdminUnroutedComponent } from './component/application/Usuario/unrouted/admin/usuario-detail-admin-unrouted/usuario-detail-admin-unrouted/usuario-detail-admin-unrouted.component';
import { UsuarioNewAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-new-admin-routed/usuario-new-admin-routed/usuario-new-admin-routed.component';
import { UsuarioEditAdminRoutedComponent } from './component/application/Usuario/routed/admin/usuario-edit-admin-routed/usuario-edit-admin-routed/usuario-edit-admin-routed.component';


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
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule



  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
