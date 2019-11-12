import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

import {MarcaService} from '../marca.service';
import {Marca} from '../marca';
import {Cliente} from '../../cliente/cliente';

@Component({
    selector: 'app-marca-create',
    templateUrl: './marca-create.component.html',
    styleUrls: ['./marca-create.component.css'],
    providers: [DatePipe]
})
export class MarcaCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param marcaService The marcas' services provider
    * @param clienteService The clientes' services provider
    * @param editorialService The editorials' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private marcaService: MarcaService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * The new marca
    */
    marca: Marca;

    /**
    * The list of all the clientes in the MarcaStore
    */
    clientes: Cliente[];

    /**
    * The clientes of the new marca
    * This list is passed as a parameter to the child two-list component
    * It is also updated by that child component
    */
    marcaClientes: Cliente[];

    /**
    * Cancels the creation of the new marca
    * Redirects to the marcas' list page
    */
    cancelCreation(): void {
        this.toastrService.warning('The marca wasn\'t created', 'Marca creation');
        this.router.navigate(['/marcas/list']);
    }

    /**
    * Creates a new marca
    */
    createMarca(): Marca {
              this.marcaService.createMarca(this.marca)
            .subscribe(marca => {
                this.marca.id = marca.id;
                this.router.navigate(['/marcas/' + marca.id]);
            }, err => {
                this.toastrService.error(err, 'Error');
            });
        return this.marca;
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.marca = new Marca();
    }

}
