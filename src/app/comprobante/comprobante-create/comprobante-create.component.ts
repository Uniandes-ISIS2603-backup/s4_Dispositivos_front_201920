import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {ComprobanteService} from '../comprobante.service';
import {Comprobante} from '../comprobante';
import {Cliente} from '../../cliente/cliente';

@Component({
    selector: 'app-comprobante-create',
    templateUrl: './comprobante-create.component.html',
    styleUrls: ['./comprobante-create.component.css'],
    providers: [DatePipe]
})
export class ComprobanteCreateComponent implements OnInit {

    constructor(
        private dp: DatePipe,
        private comprobanteService: ComprobanteService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The new comprobante
    */
    comprobante: Comprobante;

    /**
    * The list of all the clientes in the Comprobante
    */
    clientes: Cliente[];

    /**
    * The clientes of the new comprobante
    * This list is passed as a parameter to the child two-list component
    * It is also updated by that child component
    */
    comprobanteClientes: Cliente[];

    /**
    * Cancels the creation of the new comprobante
    * Redirects to the comprobantes' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('El comprobante no fue creado', 'Cración de comproabnte de pago');
        this.router.navigate(['/comprobante/list']);
    }

    /**
    * Creates a new comprobante
    */
    createComprobante(): Comprobante {
              this.comprobanteService.createComprobante(this.comprobante)
            .subscribe(comprobante => {
                this.comprobante.numeroDeFactura = comprobante.numeroDeFactura;
                this.router.navigate(['/comprobantes/' + comprobante.numeroDeFactura]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.comprobante;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.comprobante = new Comprobante();
    }

}
