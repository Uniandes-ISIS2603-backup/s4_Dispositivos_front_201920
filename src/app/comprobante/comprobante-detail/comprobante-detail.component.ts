import {Component, OnInit, OnDestroy, ViewChild, ViewContainerRef} from '@angular/core';
import {ActivatedRoute, Router, NavigationEnd} from '@angular/router';
import {ModalDialogService, SimpleModalComponent} from 'ngx-modal-dialog';
import {ToastrService} from 'ngx-toastr';

import {ComprobanteService} from '../comprobante.service';
import {Comprobante} from '../comprobante';
import {ComprobanteDetail} from '../comprobante-detail';

@Component({
    selector: 'app-comprobante-detail',
    templateUrl: './comprobante-detail.component.html',
    styleUrls: ['./comprobante-detail.component.css']
})
export class ComprobanteDetailComponent implements OnInit, OnDestroy {

    /**
    * The constructor of the component
    * @param comprobanteService The comprobante service which communicates with the API
    * @param route The route which helps to retrieves the id of the comprobante to be shown
    * @param router The router which is needed to know when the component needs to reload
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private comprobanteService: ComprobanteService,
        private route: ActivatedRoute,
        private modalDialogService: ModalDialogService,
        private router: Router,
        private viewRef: ViewContainerRef,
        private toastrService: ToastrService
    ) {
        this.navigationSubscription = this.router.events.subscribe((e: any) => {
            if (e instanceof NavigationEnd) {
                this.ngOnInit();
            }
        });
    }
    comprobante_id: number;

    comprobanteDetail: ComprobanteDetail;

    other_comprobantes: Comprobante[];

    navigationSubscription;

    getComprobanteDetail(): void {
        this.comprobanteService.getComprobanteDetail(this.comprobante_id)
            .subscribe(comprobanteDetail => {
                this.comprobanteDetail = comprobanteDetail;
            });
    }

    getOtherComprobantes(): void {
        this.comprobanteService.getComprobantes()
            .subscribe(comprobantes => {
                this.other_comprobantes = comprobantes;
                this.other_comprobantes = this.other_comprobantes.filter(comprobante => comprobante.numeroDeFactura !== this.comprobante_id);
            });
    }

    ngOnInit() {
        this.comprobante_id = +this.route.snapshot.paramMap.get('id');
        this.comprobanteDetail = new ComprobanteDetail();
        this.getComprobanteDetail();
        this.getOtherComprobantes();
    }

    ngOnDestroy() {
        if (this.navigationSubscription) {
            this.navigationSubscription.unsubscribe();
        }
    }
}
