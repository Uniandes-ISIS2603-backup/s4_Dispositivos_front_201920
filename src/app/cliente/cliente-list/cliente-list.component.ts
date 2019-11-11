import {Component, OnInit, ViewContainerRef} from '@angular/core';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {ClienteService} from '../cliente.service';
import {Cliente} from '../cliente';
import {ClienteDetail} from '../cliente-detail';

/**
* The cliente's list component
*/
@Component({
    selector: 'app-cliente',
    templateUrl: './cliente-list.component.html',
    styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

    /**
    * Constructor for the component
    * @param clienteService The cliente's services provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private clienteService: ClienteService,
        private modalDialogService: ModalDialogService,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService) {}

    /**
    * The list of clientes which belong to the store
    */
    clientes: Cliente[];

    /**
    * The id of the cliente that the user wants to view
    */
    cliente_id: string;

    /**
    * Shows or hides the cliente-create-component
    */
    showCreate: boolean;

    /**
     * Shows or hides the detail of an cliente
     */
    showView: boolean;

    /**
    * Shows or hides the edition of an cliente
    */
    showEdit: boolean;

    /**
     * the cliente that the user views.
     */
    selectedCliente: Cliente;


    /**
    * Shows the cliente
    */
    onSelected(cliente_id: string): void {
        this.showCreate = false;
        this.showEdit = false;
        this.showView = true;
        this.cliente_id = cliente_id;
        this.selectedCliente = new ClienteDetail();
        this.getClienteDetail();
    }

    /**
    * Shows or hides the create component
    */
    showHideCreate(): void {
        this.showView = false;
        this.showEdit = false;
        this.showCreate = !this.showCreate;
    }

    /**
    * Shows or hides the create component
    */
    showHideEdit(cliente_id: string): void {
        if (!this.showEdit || (this.showEdit && cliente_id != this.selectedCliente.cedula)) {
            this.showView = false;
            this.showCreate = false;
            this.showEdit = true;
            this.cliente_id = cliente_id;
            this.selectedCliente = new ClienteDetail();
            this.getClienteDetail();
        }
        else {
            this.showEdit = false;
            this.showView = true;
        }
    }

    /**
    * Asks the service to update the list of clientes
    */
    getClientes(): void {
        this.clienteService.getClientes()
            .subscribe(clientes => {
                this.clientes = clientes;
            });
    }

    getClienteDetail(): void {
        this.clienteService.getClienteDetail(this.cliente_id)
            .subscribe(selectedCliente => {
                this.selectedCliente = selectedCliente
            });
    }

    updateCliente(): void {
        this.showEdit = false;
        this.showView = true;
    }

    /**
    * This will initialize the component by retrieving the list of clientes from the service
    * This method will be called when the component is created
    */
    ngOnInit() {
        this.showCreate = false;
        this.showView = false;
        this.showEdit = false;
        this.selectedCliente = undefined;
        this.cliente_id = undefined;
        this.getClientes();
    }
}