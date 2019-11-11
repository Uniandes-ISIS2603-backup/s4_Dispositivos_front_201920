import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { UserService } from '../user.service';

import { User } from '../user';

import { ToastrService } from 'ngx-toastr';

@Component({
    selector: 'app-user-login',
    templateUrl: './user-login.component.html',
    styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

    /**
    * Constructor for the component
    * @param userService User service provider
    * @param toastrService The toastr to show messages to the user
    */
    constructor(
        private userService: UserService,
        private toastrService: ToastrService,
    ) { }

    user: User;

    roles: String[];

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        this.userService.login(this.user.role);
        this.toastrService.success('Logged in')
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new User();
        this.roles = ['Administrator', 'Cliente', 'Vendedor'];
    }

}