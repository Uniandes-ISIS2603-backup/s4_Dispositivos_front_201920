import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { UserLoginComponent } from '../user/user-login/user-login.component';
import { UserSignUpComponent } from '../user/user-sign-up/user-sign-up.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { MarcaCreateComponent } from '../marca/marca-create/marca-create.component';

const routes: Routes = 
[
    {
        path: 'login',
                component: UserLoginComponent,
                canActivate: [NgxPermissionsGuard],
                data: {
                    permissions: {
                        only: ['GUEST']
                    }
        },
        children: []
    },
    {
        path: 'sign-up',
        component: UserSignUpComponent,
        canActivate: [NgxPermissionsGuard],
        data: {
            permissions: {
                only: ['GUEST']
            }
        },
        children: []
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