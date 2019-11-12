import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from '../app-routing/app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxPermissionsModule} from 'ngx-permissions';

import {CategoriaService} from './categoria.service';
import {CategoriaCreateComponent} from './categoria-create/categoria-create.component';
import { CategoriaDetailComponent } from './categoria-detail/categoria-detail.component';
import { CategoriaListComponent } from './categoria-list/categoria-list.component';


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
    declarations: [CategoriaCreateComponent, CategoriaDetailComponent, CategoriaListComponent],
    providers: [CategoriaService], 
    exports:[CategoriaCreateComponent, CategoriaDetailComponent, CategoriaListComponent]

})
export class CategoriaModule { }