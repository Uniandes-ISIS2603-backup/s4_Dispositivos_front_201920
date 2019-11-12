import {Component, OnInit, Input} from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import {MedioPago} from '../../medioPago/medio';
import {MedioPagoService} from '../../medioPago/medio.service';
@Component({
    selector: 'app-´medio-list',
    templateUrl: './medio-list.component.html',
    styleUrls: ['./medio-list.component.css']
})

export class MedioPagoListComponent implements OnInit 
{

        /**
    * The list of categorias to display
    */
   @Input() medios: MedioPago[];

       /**
    * The component's constructor
    */
   constructor(private medioPagoService: MedioPagoService, private route: ActivatedRoute) {}

    /**
    * This method retrieves all the books in the Bookstore to show them in the list
    */
   getMedios(): void {
    this.medioPagoService.getmedioPagos()
        .subscribe(medios => {
            this.medios = medios;
        });
}
    /**
    * The method which initializes the component
    */
   ngOnInit() {
this.getMedios();
    
       }

}