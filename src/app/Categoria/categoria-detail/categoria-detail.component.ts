import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {CategoriaService} from '../categoria.service';
import {Categoria} from '../categoria';
import {CategoriaDetail} from '../categoria-detail';

@Component({
    selector: 'app-categoria-detail',
    templateUrl: './categoria-detail.component.html',
    styleUrls: ['./categoria-detail.component.css']
})
export class CategoriaDetailComponent implements OnInit, OnDestroy
{

        /**
    * The component's constructor
    * @param categriaService The categoria's service
    * @param route The route element which helps to obtain the categoria's id
    * @param toastrService The toastr to show messages to the user
    */
   constructor(
    private categoriaService: CategoriaService,
    private route: ActivatedRoute
) { }

    /**
    * The categoria's whose details we want to show
    */
   categoriaDetail: CategoriaDetail;

   /**
   * The categoria's id retrieved from the address
   */
   categoria_id: number;

       /**
    * The method which retrieves the books of an editorial
    */
   getEditorialDetail(): void {
    this.categoriaService.getCategoriaDetail(this.categoria_id)
        .subscribe(categoriaDetail => {
            this.categoriaDetail = categoriaDetail
        });
}

    /**
    * The method which initilizes the component
    * We need to initialize the book and its editorial so that
    * they are never considered undefined
    */
   ngOnInit() {
}

/**
* This method helps to refresh the view when we need to load another book into it
* when one of the other books in the list is clicked
*/
ngOnDestroy() {
}
}