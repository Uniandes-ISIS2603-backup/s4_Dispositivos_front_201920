import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import {MedioPagoService} from './medio.service';
import {MedioPagoCreateComponent} from './medio-create/medio-create.component';
import {MedioPagoListComponent } from './medio-list/medio-list.component';


@NgModule({
    imports:
    [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule,
        ReactiveFormsModule,
        NgxPermissionsModule
    ], 
    declarations:[MedioPagoCreateComponent, MedioPagoListComponent],
    providers:[MedioPagoService], 
    exports:[MedioPagoCreateComponent, MedioPagoListComponent]

})
export class MedioPagoModule { }