import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {MarcaService} from '../marca.service';
import {Marca} from '../marca';
import {MarcaDetail} from '../marca-detail';

@Component({
    selector: 'app-marca-detail',
    templateUrl: './marca-detail.component.html',
    styleUrls: ['./marca-detail.component.css']
})
export class MarcaDetailComponent implements OnInit, OnDestroy {

    /**
    * The constructor of the component
    * @param marcaService The marca service which communicates with the API
    * @param route The route which helps to retrieves the id of the marca to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private marcaService: MarcaService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private router: Router,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
    ) {
        //This is added so we can refresh the view when one of the marcas in
        //the "Other marcas" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }

    /**
    * The marca's id retrieved from the path
    */
    marca_id: number;

    /**
    * The marca whose details are shown
    */
    marcaDetail: MarcaDetail;

    /**
    * The other marcas shown in the sidebar
    */
    other_marcas: Marca[];

    /**
    * The suscription which helps to know when a new marca
    * needs to be loaded
    */
    navigationSubscription;

    /**
    * The method which retrieves the details of the marca that
    * we want to show
    */
    getMarcaDetail(): void {
        this.marcaService.getMarcaDetail(this.marca_id)
            .subscribe(marcaDetail => {
                this.marcaDetail = marcaDetail;
            });
    }

    /**
    * This method retrieves all the marcas in the Marcastore to show them in the list
    */
    getOtherMarcas(): void {
        this.marcaService.getMarcas()
            .subscribe(marcas => {
                this.other_marcas = marcas;
                this.other_marcas = this.other_marcas.filter(marca => marca.id !== this.marca_id);
            });
    }

    /**
* This function deletes the marca from the MarcaStore 
*/
    deleteMarca(): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete a marca',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this marca?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.marcaService.deleteMarca(this.marca_id).subscribe(marca => {
                            this.toastrService.success("The marca  ", "Marca deleted");
                            this.router.navigate(['marcas/list']);
                        }, err => {
                            this.toastrService.error(err, "Error");
                        });
                        return true;
                    }
                },
                {text: 'No', onAction: () => true}
            ]
        });
    }

    /**
    * The method which initilizes the component
    * We need to initialize the marca and its editorial so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.marca_id = +this.route.snapshot.paramMap.get('id');
        this.marcaDetail = new MarcaDetail();
        this.getMarcaDetail();
        this.getOtherMarcas();
    }

    /**
    * This method helps to refresh the view when we need to load another marca into it
    * when one of the other marcas in the list is clicked
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}
