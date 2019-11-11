import {Component, OnInit} from '@angular/core';
import { UserService } from './user/user.service';

/**
 * The app component. This component is the base of s4_dispositivos-Front
 */
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    /**
     * The title that appears on the NavBar and the web browser
     */
    title: String;

    /**
     * Assigns a title to the web page
     */
    ngOnInit(): void {
        this.title = "WireLess";
        this.authService.start();
    }

       /**
     * @ignore
     */
    constructor(private authService: UserService) { }

    logout(): void {
        this.authService.logout()
    }

}





