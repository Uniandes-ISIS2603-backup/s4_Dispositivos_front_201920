import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {NgxPermissionsModule} from 'ngx-permissions';

import { ClienteService } from './cliente.service';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { ClienteDetailComponent } from './cliente-detail/cliente-detail.component';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import {FacturaModule} from '../factura/factura.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgxPermissionsModule,
    FormsModule,
    FacturaModule,
    NgbModule
  ],
  declarations: [ClienteListComponent, ClienteDetailComponent],
  exports: [ClienteListComponent],
  providers: [ClienteService]
})
export class ClienteModule { }