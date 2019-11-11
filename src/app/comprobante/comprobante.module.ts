import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import {ComprobanteListComponent} from './comprobante-list/comprobante-list.component';
import {ComprobanteCreateComponent} from './comprobante-create/comprobante-create.component';
import {ComprobanteDetailComponent} from './comprobante-detail/comprobante-detail.component';
import {ComprobanteService} from './comprobante.service';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        NgxPermissionsModule
    ],
    declarations: [
        ComprobanteListComponent, ComprobanteDetailComponent, ComprobanteCreateComponent
    ],
    providers: [ComprobanteService],
    exports: [ComprobanteListComponent]
})
export class ComprobanteModule {}
