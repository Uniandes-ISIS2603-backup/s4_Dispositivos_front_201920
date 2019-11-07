import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {Categoria} from '../../categoria/categoria';
import {CategoriaService} from '../../categoria/categoria.service';
@Component({
    selector: 'app-categoria-list',
    templateUrl: './categoria-list.component.html',
    styleUrls: ['./categoria-list.component.css']
})

export class CategoriaListComponent implements OnInit {

    /**
    * The list of categorias to display
    */
   @Input() categorias: Categoria[];

    /**
    * The component's constructor
    */
   constructor(private categoriaService: CategoriaService, private route: ActivatedRoute) {}

    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
   getCategorias(): void {
    this.categoriaService.getCategorias()
        .subscribe(categorias => {
            this.categorias = categorias;
        });
}


    /**
    * The method which initializes the component
    */
   ngOnInit() {


   }
       
}