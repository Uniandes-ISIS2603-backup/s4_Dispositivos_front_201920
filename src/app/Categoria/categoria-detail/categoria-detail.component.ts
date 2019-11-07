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