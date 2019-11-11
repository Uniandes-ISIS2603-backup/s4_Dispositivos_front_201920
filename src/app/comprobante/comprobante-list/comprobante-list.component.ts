import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import 'rxjs/add/operator/filter';


import {Comprobante} from '../../comprobante/comprobante';
import {ComprobanteService} from '../../comprobante/comprobante.service';
@Component({
    selector: 'app-comprobante-list',
    templateUrl: './comprobante-list.component.html',
    styleUrls: ['./comprobante-list.component.css']
})
export class ComprobanteListComponent implements OnInit {

    /**
    * The list of comprobantes to display
    */
    @Input() comprobantes: Comprobante[];

    /**
    * The component's constructor
    */
    constructor(private comprobanteService: ComprobanteService, private route: ActivatedRoute) {}

    allcomprobantes: string = 'no';
    
    getComprobantes(): void
    {
        this.comprobanteService.getComprobantes()
            .subscribe(comprobantes => {
                this.comprobantes = comprobantes;
            });
    }

    ngOnInit() {
        this.route.queryParams
            .filter(params => params.allcomprobantes)
            .subscribe(params => {
                console.log(params);

                this.allcomprobantes = params.allcomprobantes;
                console.log(this.allcomprobantes);
            });
        if (this.allcomprobantes == 'yes') {
            console.log("allcomprobantes");
            this.getComprobantes();
        }
    }

}
