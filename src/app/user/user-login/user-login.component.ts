import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { UserService } from '../user.service';

import { User } from '../user';

import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-auth-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

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

    login(): void {
        this.userService.login(this.user.role);
        this.toastrService.success('Logged in')
    }

    ngOnInit() {
        this.user = new User();
        this.roles = ['Administrador', 'Cliente', 'Vendedor'];
    }

}
