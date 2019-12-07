import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminService } from './admin.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminViewComponent } from './admin-view/admin-view.component';
import { NgxPermissionsModule } from 'ngx-permissions';
import { DispositivoService } from '../dispositivo/dispositivo.service';
import { MarcaService } from '../marca/marca.service';
import { CategoriaService } from '../categoria/categoria.service';

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
    declarations: [AdminViewComponent],
    providers: [AdminService],
    exports:[AdminViewComponent],
    bootstrap:[AdminViewComponent]
})
export class AdminModule { }