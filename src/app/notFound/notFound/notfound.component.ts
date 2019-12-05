import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {DatePipe} from '@angular/common';
import {ToastrService} from 'ngx-toastr';

@Component({
    selector: 'app-notfound',
    templateUrl: './notfound.component.html',
    styleUrls: ['./notfound.component.css'],
    providers: [DatePipe]
})
export class NotFoundComponent implements OnInit {

    /**
    * Constructor for the component
    * @param marcaService The marcas' services provider
    * @param clienteService The clientes' services provider
    * @param editorialService The editorials' services provider
    * @param toastrService The toastr to show messages to the user
    * @param router The router
    */
    constructor(
        private dp: DatePipe,
        private toastrService: ToastrService,
        private router: Router
    ) {}

    /**
    * This function will initialize the component
    */
    ngOnInit() {
    }

}
