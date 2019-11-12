import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import {MarcaListComponent} from './marca-list/marca-list.component';
import {MarcaCreateComponent} from './marca-create/marca-create.component';
import {MarcaDetailComponent} from './marca-detail/marca-detail.component';
import {MarcaService} from './marca.service';

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
        MarcaListComponent, MarcaDetailComponent, MarcaCreateComponent
    ],
    providers: [MarcaService],
    exports: [MarcaListComponent]
})
export class MarcaModule {}
