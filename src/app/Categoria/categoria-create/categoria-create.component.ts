import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {CategoriaService} from '../categoria.service';
import {Categoria} from '../categoria';

@Component({
    selector: 'app-categoria-create',
    templateUrl: './categoria-create.component.html',
    styleUrls: ['./categoria-create.component.css'],
    providers: []
})
export class CategoriaCreateComponent implements OnInit
{
        /**
    * Constructor for the component
    * @param categoriaService The categoria' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private categoriaService: CategoriaService,
        private toastrService: ToastrService,
        private router: Router
    ) {}

        /**
    * The new categoria
    */
    categoria: Categoria;

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

    console.log(this.categoria);
    this.categoriaService.createCategoria(this.categoria)
        .subscribe((categoria) => {
            this.categoria = categoria;
            this.create.emit();
            this.toastrService.success("The categoria was created", "Categoria creation");

        });
    return this.categoria;
}

    /**
    * This function will initialize the component
    */
   ngOnInit() {
    this.categoria = new Categoria();
}
}