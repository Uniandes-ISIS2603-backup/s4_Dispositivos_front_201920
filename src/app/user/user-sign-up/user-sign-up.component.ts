import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../user.service';
import { User } from '../user';

@Component({
    selector: 'app-auth-sign-up',
    templateUrl: './user-sign-up.component.html',
    styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {

    /**
    * Constructor for the component
    * @param userService
    * @param toastrService
    */
    constructor(
        private userService: UserService,
        private toastrService: ToastrService,
    ) { }

    user: User;

    roles: String[];

    signUp(): void {
        this.userService.login(this.user.role);
        this.toastrService.success('Successfully signed up')
    }

    ngOnInit() {
        this.user = new User();
        this.roles = ['Administrador', 'Cliente', 'Vendedor'];
    }

}
