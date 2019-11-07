import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';
import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';

@Component({
    selector: 'app-cliente-create',
    templateUrl: './cliente-create.component.html',
    styleUrls: ['./cliente-create.component.css'],
    providers: [DatePipe]
})
export class ClienteCreateComponent implements OnInit {

    /**
    * Constructor for the component
    * @param dp DatePipe to format the date.
    * @param clienteService The cliente's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private dp: DatePipe,
        private clienteService: ClienteService,
        private toastrService: ToastrService
    ) {}

    /**
    * The new cliente
    */
    cliente: Cliente;

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an cliente
    */
    @Output() cancel = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user created a new cliente
    */
    @Output() create = new EventEmitter();

    /**
    * Creates an cliente
    */
    createCliente(): Cliente {

        
        console.log(this.cliente);
        this.clienteService.createCliente(this.cliente)
            .subscribe((cliente) => {
                this.cliente = cliente;
                this.create.emit();
                this.toastrService.success("The cliente was created", "Cliente creation");

            });
        return this.cliente;
    }

    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
    cancelCreation(): void {
        this.cancel.emit();
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.cliente = new Cliente();
    }

}
