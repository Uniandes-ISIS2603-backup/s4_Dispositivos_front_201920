import { Component, OnInit, Input, OnChanges, EventEmitter, Output } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

import { Calificacion } from '../calificacion';
import { DispositivoService } from '../dispositivo.service';
import { Dispositivo } from '../../dispositivo/dispositivo';
@Component({
    selector: 'app-dispositivo-add-calificacion',
    templateUrl: './dispositivo-add-review.component.html',
    styleUrls: ['./dispositivo-add-review.component.css']
})
export class DispositivoAddCalificacionComponent implements OnInit, OnChanges {

    /**
    * The constructor of the component
    * @param dispositivoService The dispositivo service which communicates with the API
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dispositivoService: DispositivoService,
        private toastrService: ToastrService
    ) { }

    /**
    * The dispositivo's id
    */
    @Input() dispositivo: Dispositivo;

    /**
    * The calificacion to post
    */
    calificacion: Calificacion;
    
    public isCollapsed = true;

    /**
    * The Event Emitter which sends the signal when a calificacion has just been posted
    * so that the list of calificacions refreshes
    */
    @Output() updateCalificaciones = new EventEmitter();

    /**
    * This function posts a calificacion
    * @param calificacionForm The form of the calificacion
    */
    postCalificacion(calificacionForm: NgForm): Calificacion {
        this.calificacion.dispositivo = this.dispositivo;
        this.dispositivoService.createCalificacion(this.dispositivo.id,this.calificacion)
            .subscribe(() => {
                calificacionForm.resetForm();
                this.updateCalificaciones.emit();
                this.toastrService.success("The calificacion was successfully created", 'Calificacion added');
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.calificacion;
    }

    /**
    * The function which initializes the component.
    */
    ngOnInit() {
        this.calificacion = new Calificacion();
    }

    /**
    * The function which notices that the input which defines the dispositivo_id has changed.
    * If the dispositivo has changed, we update the calificacions to show
    */
    ngOnChanges() {
        this.ngOnInit();
    }

}