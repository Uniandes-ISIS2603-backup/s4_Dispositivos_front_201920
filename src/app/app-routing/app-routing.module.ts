import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { UserLoginComponent } from '../user/user-login/user-login.component';
import { UserSignUpComponent } from '../user/user-sign-up/user-sign-up.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { MarcaCreateComponent } from '../marca/marca-create/marca-create.component';
import { DispositivoListComponent } from '../dispositivo/dispositivo-list/dispositivo-list.component';
import { HomeComponent } from '../dispositivo/home/home.component';
import { DispositivoDetailComponent } from '../dispositivo/dispositivo-detail/dispositivo-detail.component';

const routes: Routes = [

    {
        path: 'dispositivos',
        children: [
            {
                path: "all",
                component: DispositivoListComponent
            },
            {
                path: ':id',
                component: DispositivoDetailComponent
            },
        ]

    },

    {
        path: 'user',
        children: [
            {
                path: 'login',
                component: UserLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
                }
            },
            {
                path: 'signup',
                component: UserSignUpComponent,
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
        component: UserLoginComponent,
        children: []
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
                outlet: "detail",
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