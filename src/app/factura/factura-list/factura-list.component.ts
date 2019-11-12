import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';


import {Factura} from '../../factura/factura';
import {FacturaService} from '../../factura/factura.service';
@Component({
    selector: 'app-factura-list',
    templateUrl: './factura-list.component.html',
    styleUrls: ['./factura-list.component.css']
})
export class FacturaListComponent implements OnInit {

    /**
    * The list of facturas to display
    */
    @Input() facturas: Factura[];

    /**
    * The component's constructor
    */
    constructor(private facturaService: FacturaService, private route: ActivatedRoute) {}

    allfacturas: string = 'no';
    /**
    * This method retrieves all the facturas in the Facturastore to show them in the list
    */
    getFacturas(): void {
        this.facturaService.getFacturas()
            .subscribe(facturas => {
                this.facturas = facturas;
            });
    }

    /**
    * The method which initializes the component
    */
    ngOnInit() {
        this.route.queryParams
            .filter(params => params.allfacturas)
            .subscribe(params => {
                console.log(params);

                this.allfacturas = params.allfacturas;
                console.log(this.allfacturas);
            });
        if (this.allfacturas == 'yes') {
            console.log("allfacturas");

            this.getFacturas();
        }
    }

}
