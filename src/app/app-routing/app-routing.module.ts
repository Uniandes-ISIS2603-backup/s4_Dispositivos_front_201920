import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { NgxPermissionsGuard } from 'ngx-permissions';

import { AuthLoginComponent } from '../user/user-login/user-login.component';
import { AuthSignUpComponent } from '../user/user-sign-up/user-sign-up.component';
import { ClienteDetailComponent } from '../cliente/cliente-detail/cliente-detail.component';
import { ClienteListComponent } from '../cliente/cliente-list/cliente-list.component';
import { MarcaCreateComponent } from '../marca/marca-create/marca-create.component';

const routes: Routes = 
[
    {
        path: 'login',
                component: AuthLoginComponent,
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
        component: AuthSignUpComponent,
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
        component: AuthLoginComponent,
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