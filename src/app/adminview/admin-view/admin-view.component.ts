import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {AdminService} from '../admin.service';
import { Categoria } from '../../categoria/categoria';
import { Dispositivo } from '../../dispositivo/dispositivo';
import { Marca } from '../../marca/marca';
import { MarcaService } from '../../marca/marca.service';
import { DispositivoService } from '../../dispositivo/dispositivo.service';
import { CategoriaService } from '../../categoria/categoria.service';
@Component({
    selector: 'app-admin-view',
    templateUrl: './admin-view.component.html',
    styleUrls: ['./admin-view.component.css'],
    providers:[Dispositivo,Marca,Categoria]
})
export class AdminViewComponent implements OnInit
{
        /**
    * Constructor for the component
    * @param categoriaService The categoria' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private adminService: AdminService,
        private toastrService: ToastrService,
        private router: Router,
        private categoria: Categoria,
        private dispositivo:Dispositivo,
        private categoriaService:CategoriaService,
        private marca:Marca,
        private route:ActivatedRoute
    ) {}

    /**
    * The output which tells the parent component
    * that the user created a new editorial
    */
   @Output() create = new EventEmitter();

    /**
    * The output which tells the parent component
    * that the user no longer wants to create an editorial
    */
   @Output() cancel = new EventEmitter();


    /**
    * Creates a new categoria
    */
   createCategoria(): Categoria {

    this.categoriaService.createCategoria(this.categoria)
        .subscribe((categoria) => {
            this.categoria = categoria;
            this.create.emit();
            this.toastrService.success("The categoria was created", "Categoria creation");
        });
    return this.categoria;
}

            /**
    * Creates a new marca
    */
   createMarca(): Marca {
    this.adminService.createMarca(this.marca)
        .subscribe((marca) => {
            this.marca = marca;
            this.create.emit();
            this.toastrService.success("The marca was created", "Marca creation");

        });
    return this.marca;
}

  /**
    * Creates a new dispositivo
    */
   createDispositivo(): Dispositivo {
    this.adminService.createDispositivo(this.dispositivo)
        .subscribe((dispositivo) => {
            this.dispositivo = dispositivo;
            this.create.emit();
            this.toastrService.success("The dispositivo was created", "dispositivo creation");
        });
    return this.dispositivo;
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
    this.categoria = new Categoria();
    this.dispositivo=new Dispositivo();
    this.marca=new Marca();
}
}