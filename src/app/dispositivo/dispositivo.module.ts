import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispositivoListComponent } from './dispositivo-list/dispositivo-list.component';
import { DispositivoDetailComponent } from './dispositivo-detail/dispositivo-detail.component';
import { DispositivoCreateComponent } from './dispositivo-create/dispositivo-create.component';
import { DispositivoEditComponent } from './dispositivo-edit/dispositivo-edit.component';
import { DispositivoAddCalificacionComponent } from './dispositivo-add-review/dispositivo-add-review.component';
import { HomeComponent } from './home/home.component';
import {CarouselModule} from 'primeng/carousel';
import { DispositivoService } from './dispositivo.service';
import {OwlModule} from 'ngx-owl-carousel';
import { FormsModule }   from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, 
    CarouselModule, 
    OwlModule,
    FormsModule
  ],
  declarations: [DispositivoListComponent, DispositivoDetailComponent, 
    DispositivoCreateComponent, DispositivoEditComponent, DispositivoAddCalificacionComponent, HomeComponent], 
    exports: [DispositivoListComponent, DispositivoEditComponent,CarouselModule,HomeComponent],
    providers: [DispositivoService]
})
export class DispositivoModule { }
