import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { AuthLoginComponent } from '../auth/auth-login/auth-login.component';
import { AuthSignUpComponent } from '../auth/auth-sign-up/auth-sign-up.component';
<<<<<<< HEAD
import { HomeComponent } from '../home/home.component';

const routes: Routes = [

     {
        path: 'user',
=======
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { MarcaCreateComponent } from '../marca/marca-create/marca-create.component';

const routes: Routes = [

    {
        path: 'auth',
>>>>>>> origin/Carlos
        children: [
            {
                path: 'login',
                component: AuthLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: 'sign-up',
                component: AuthSignUpComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            }
        ]
    },
    {
        path: 'home',
<<<<<<< HEAD
        component: HomeComponent
=======
        component: AuthLoginComponent,
        children: []
>>>>>>> origin/Carlos
    },
    {
        path: 'clientes',
        children: [
            {
                path: "list",
                component: ClienteListComponent,
            },
            {
                path: ":id",
                component: ClienteDetailComponent,
                outlet: "detail"
            }
        ]
    },
    {
        path: 'marcas',
        children: [
            {
                path: "crear",
                component: MarcaCreateComponent,
            }
        ]
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppRoutingModule {

}
