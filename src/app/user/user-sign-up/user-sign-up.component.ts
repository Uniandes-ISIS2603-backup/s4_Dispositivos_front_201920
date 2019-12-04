import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../user.service';
import { Cliente } from '../../cliente/cliente';
import { Vendedor } from '../../vendedores/vendedor';
import { VendedoresService } from '../../vendedores/vendedores.service';

@Component({
    selector: 'app-user-sign-up',
    templateUrl: './user-sign-up.component.html',
    styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

    /**
    * Constructor for the component
    * @param userService Auth service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private userService: UserService,
        private toastrService: ToastrService,
        private vendedorService:VendedoresService
        ) { }

    user: Cliente;
    user2:Vendedor;
    @Output() create = new EventEmitter();

    /**
    * Sign the user up with the selected role
    */
    signUp(): Cliente {
        this.userService.login('Cliente');
        this.toastrService.success('Successfully signed up')
        this.userService.signUp(this.user).subscribe((user) => {
            this.user = user;
            this.create.emit();



            this.vendedorService.createVendedor(this.user2).subscribe((user2) => {
            this.user2 = user2;
            this.create.emit();
            this.toastrService.success("The vendedor was created", "vendedor creation");
        });




            this.toastrService.success("The cliente was created", "cliente creation");
        }, err => {
            this.toastrService.error(err, "Error");
        });
    return this.user;
    }  

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user2=new Vendedor();
        this.user = new Cliente();
    }

}
