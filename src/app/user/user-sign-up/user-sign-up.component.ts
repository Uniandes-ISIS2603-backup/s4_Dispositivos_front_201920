import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

import { UserService } from '../user.service';
import { User } from '../user';

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
    ) { }

    user: User;

    roles: String[];

    /**
    * Sign the user up with the selected role
    */
    signUp(): void {
        this.userService.login(this.user.role);
        this.toastrService.success('Successfully signed up')
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new User();
        this.roles = ['Cliente', 'Vendedor'];
    }

}