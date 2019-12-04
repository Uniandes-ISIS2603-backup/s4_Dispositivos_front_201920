import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing/app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserSignUpComponent } from './user-sign-up/user-sign-up.component';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        CommonModule,
        FormsModule,
        NgbModule
    ],
    declarations: [UserLoginComponent, UserSignUpComponent],
    providers: [UserService],
    bootstrap: [UserLoginComponent,UserSignUpComponent],
    exports:[UserLoginComponent,UserSignUpComponent]
})
export class UserModule { }