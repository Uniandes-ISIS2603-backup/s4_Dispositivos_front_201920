import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {FacturaService} from '../comprobante.service';
import {Factura} from '../comprobante';
import {FacturaDetail} from '../comprobante-detail';

@Component({
    selector: 'app-factura-detail',
    templateUrl: './factura-detail.component.html',
    styleUrls: ['./factura-detail.component.css']
})
export class FacturaDetailComponent implements OnInit, OnDestroy {

    /**
    * The constructor of the component
    * @param facturaService The factura service which communicates with the API
    * @param route The route which helps to retrieves the id of the factura to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private facturaService: FacturaService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private router: Router,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
    ) {
        //This is added so we can refresh the view when one of the facturas in
        //the "Other facturas" list is clicked
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }

    /**
    * The factura's id retrieved from the path
    */
    factura_id: number;

    /**
    * The factura whose details are shown
    */
    facturaDetail: FacturaDetail;

    /**
    * The other facturas shown in the sidebar
    */
    other_facturas: Factura[];

    /**
    * The suscription which helps to know when a new factura
    * needs to be loaded
    */
    navigationSubscription;

    /**
    * The method which retrieves the details of the factura that
    * we want to show
    */
    getFacturaDetail(): void {
        this.facturaService.getFacturaDetail(this.factura_id)
            .subscribe(facturaDetail => {
                this.facturaDetail = facturaDetail;
            });
    }

    /**
    * This method retrieves all the facturas in the Facturastore to show them in the list
    */
    getOtherFacturas(): void {
        this.facturaService.getFacturas()
            .subscribe(facturas => {
                this.other_facturas = facturas;
                this.other_facturas = this.other_facturas.filter(factura => factura.numeroDeFactura !== this.factura_id);
            });
    }

    /**
* This function deletes the factura from the FacturaStore 
*/
    deleteFactura(): void {
        this.modalDialogService.openDialog(this.viewRef, {
            title: 'Delete a factura',
            childComponent: SimpleModalComponent,
            data: {text: 'Are you sure your want to delete this factura?'},
            actionButtons: [
                {
                    text: 'Yes',
                    buttonClass: 'btn btn-danger',
                    onAction: () => {
                        this.facturaService.deleteFactura(this.factura_id).subscribe(factura => {
                            this.toastrService.success("The factura  ", "Factura deleted");
                            this.router.navigate(['facturas/list']);
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
    * We need to initialize the factura and its editorial so that
    * they are never considered undefined
    */
    ngOnInit() {
        this.factura_id = +this.route.snapshot.paramMap.get('id');
        this.facturaDetail = new FacturaDetail();
        this.getFacturaDetail();
        this.getOtherFacturas();
    }

    /**
    * This method helps to refresh the view when we need to load another factura into it
    * when one of the other facturas in the list is clicked
    */
    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}
