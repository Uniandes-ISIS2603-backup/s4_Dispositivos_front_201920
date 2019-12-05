import { Component, OnInit, Input, OnChanges, Output, EventEmitter } from '@angular/core';

import { UserService } from '../user.service';

import { User } from '../user';

import { ToastrService } from 'ngx-toastr';
import { FacebookLoginProvider, GoogleLoginProvider, LinkedinLoginProvider, AuthService } from 'angular-6-social-login';

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
        private socialAuthService: AuthService,
        private toastrService: ToastrService,
    ) { }

    user: User;

    roles: String[];
    signInWithGoogle(): void {
       var win= window.open("https://accounts.google.com/ServiceLogin/identifier?passive=1209600&continue=https%3A%2F%2Faccounts.google.com%2F&followup=https%3A%2F%2Faccounts.google.com%2F&flowName=GlifWebSignIn&flowEntry=AddSession");
       var timer = setInterval(function() {
           if(win.closed) {
       this.userService.login('CLIENT');
       clearInterval(timer);
        this.toastrService.success('Logged in')}},100);
    }

    signInWithFB(): void {
        var win= window.open("https://www.facebook.com/login");
        var timer = setInterval(function() {
            if(win.closed) {
        this.userService.login('CLIENT');
        clearInterval(timer);
         this.toastrService.success('Logged in')}},100);
    }

    signInWithLinkedIn(): void {
        var win= window.open("https://www.linkedin.com/login");
       var timer = setInterval(function() {
           if(win.closed) {
       this.userService.login('CLIENT');
       clearInterval(timer);
        this.toastrService.success('Logged in')}},100);
    }

    /**
    * Logs the user in with the selected role
    */
    login(): void {
        this.userService.login(this.user.role);
        this.toastrService.success('Logged in')
    }

    loginA(): void {
        this.userService.login('CLIENT');
        this.toastrService.success('Logged in')
    }

    /**
    * This function will initialize the component
    */
    ngOnInit() {
        this.user = new User();
        this.roles = ['VEND', 'ADMIN', 'CLIENT'];
    }

}