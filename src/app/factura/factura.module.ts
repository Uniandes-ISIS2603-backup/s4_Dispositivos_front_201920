import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import {FacturaListComponent} from './factura-list/factura-list.component';
import {FacturaCreateComponent} from './factura-create/factura-create.component';
import {FacturaDetailComponent} from './factura-detail/factura-detail.component';
import {FacturaService} from './factura.service';

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
        FacturaListComponent, FacturaDetailComponent, FacturaCreateComponent
    ],
    providers: [FacturaService],
    exports: [FacturaListComponent]
})
export class FacturaModule {}
