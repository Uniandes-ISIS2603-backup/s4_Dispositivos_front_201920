import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {ToastrService} from 'ngx-toastr';

import {MedioPagoService} from '../medio.service';
import {MedioPago} from '../medio';

@Component({
    selector: 'app-medio-create',
    templateUrl: './medio-create.component.html',
    styleUrls: ['./medio-create.component.css'],
    providers: []
})
export class MedioPagoCreateComponent implements OnInit
{
            /**
    * Constructor for the component
    * @param medioPagoService The medio' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
   constructor(
    private medioPagoService: MedioPagoService,
    private toastrService: ToastrService,
    private router: Router
) {}

        /**
    * The new medio
    */
   medio: MedioPago;

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
    * Creates a new medio
    */
   createMedioPago(): MedioPago {

    console.log(this.medio);
    this.medioPagoService.createMedio(this.medio)
        .subscribe((medio) => {
            this.medio = medio;
            this.create.emit();
            this.toastrService.success("The medio was created", "Medio Pago creation");

        });
    return this.medio;
}


    /**
    * Emits the signal to tell the parent component that the
    * user no longer wants to create an user
    */
   cancelCreation(): void {
    this.cancel.emit();
}
    /**
    * This function will initialize the component
    */
   ngOnInit() {
    this.medio = new MedioPago();
}




}