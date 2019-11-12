import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { VendedoresListComponent } from './vendedores-list/vendedores-list.component';
import { VendedoresService } from './vendedores.service';
import { VendedoresDetailComponent } from './vendedores-detail/vendedores-detail.component';
import { VendedoresCreateComponent } from './vendedores-create/vendedores-create.component';

@NgModule({
  imports: [
    CommonModule, ReactiveFormsModule, AppRoutingModule
  ],
  declarations: [VendedoresListComponent, VendedoresDetailComponent, VendedoresCreateComponent],
  exports: [VendedoresListComponent, VendedoresCreateComponent],
  providers: [VendedoresService]
})
export class VendedoresModule { }