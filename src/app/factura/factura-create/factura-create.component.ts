import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {FacturaService} from '../factura.service';
import {Factura} from '../factura';
import {Cliente} from '../../cliente/cliente';

@Component({
    selector: 'app-factura-create',
    templateUrl: './factura-create.component.html',
    styleUrls: ['./factura-create.component.css'],
    providers: [DatePipe]
})
export class FacturaCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param facturaService The facturas' services provider
    * @param clienteService The clientes' services provider
    * @param editorialService The editorials' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private facturaService: FacturaService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The new factura
    */
    factura: Factura;

    /**
    * The list of all the clientes in the FacturaStore
    */
    clientes: Cliente[];

    /**
    * The clientes of the new factura
    * This list is passed as a parameter to the child two-list component
    * It is also updated by that child component
    */
    facturaClientes: Cliente[];

    /**
    * Cancels the creation of the new factura
    * Redirects to the facturas' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The factura wasn\'t created', 'Factura creation');
        this.router.navigate(['/facturas/list']);
    }

    /**
    * Creates a new factura
    */
    createFactura(): Factura {
              this.facturaService.createFactura(this.factura)
            .subscribe(factura => {
                this.factura.numeroDeFactura = factura.numeroDeFactura;
                this.router.navigate(['/facturas/' + factura.numeroDeFactura]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.factura;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.factura = new Factura();
    }

}
