import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DispositivoListComponent } from './dispositivo-list/dispositivo-list.component';
import { DispositivoDetailComponent } from './dispositivo-detail/dispositivo-detail.component';
import { DispositivoCreateComponent } from './dispositivo-create/dispositivo-create.component';
import { DispositivoEditComponent } from './dispositivo-edit/dispositivo-edit.component';
import { DispositivoAddReviewComponent } from './dispositivo-add-review/dispositivo-add-review.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DispositivoListComponent, DispositivoDetailComponent, DispositivoCreateComponent, DispositivoEditComponent, DispositivoAddReviewComponent]
})
export class DispositivoModule { }
