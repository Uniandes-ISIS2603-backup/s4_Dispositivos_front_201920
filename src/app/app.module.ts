import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ToastrModule} from 'ngx-toastr';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpErrorInterceptor} from './interceptors/httperrorinterceptor.service';
import {NgxPermissionsModule} from 'ngx-permissions';
import { ModalDialogModule } from 'ngx-modal-dialog';
import {OwlModule} from 'ngx-owl-carousel'; 

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing/app-routing.module';
import { DispositivoModule } from './dispositivo/dispositivo.module';
import { VendedoresModule } from './vendedores/vendedores.module';
import { RouterModule } from '@angular/router';
import {MarcaModule} from './marca/marca.module';
import {FacturaModule} from './factura/factura.module';
import {ClienteModule} from './cliente/cliente.module';
import {UserModule} from './user/user.module';

import {CategoriaModule} from './categoria/categoria.module';
import {MedioPagoModule} from './medioPago/medio.module';
import { AdminModule } from './adminview/admin.module';
import { NotFoundModule } from './notFound/notFound.module';


import {
    SocialLoginModule,
    AuthServiceConfig,
    GoogleLoginProvider,
    FacebookLoginProvider,
    LinkedinLoginProvider,
} from "angular-6-social-login";
 
 
// Configs 
export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig(
      [
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider('528961187921-ld24b25466u4t2lacn9r35asg000lfis.apps.googleusercontent.com')
        },
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider('528961187921-ld24b25466u4t2lacn9r35asg000lfis.apps.googleusercontent.com')
        },
          {
            id: LinkedinLoginProvider.PROVIDER_ID,
            provider: new LinkedinLoginProvider("1098828800522-m2ig6bieilc3tpqvmlcpdvrpvn86q4ks.apps.googleusercontent.com")
          },
      ]
  );
  return config;
}

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        HttpClientModule,
        SocialLoginModule,
        BrowserAnimationsModule,
        ModalDialogModule.forRoot(),
        ClienteModule,
        FacturaModule,
        UserModule,
        MarcaModule,
        VendedoresModule,
        FormsModule,
        ToastrModule.forRoot({
            timeOut: 10000,
            positionClass: 'toast-bottom-right',
            preventDuplicates: true,
        }),
        NgxPaginationModule,
        NgxPermissionsModule.forRoot(),
        NgbModule.forRoot(), 
        DispositivoModule, 
        CategoriaModule,
        MedioPagoModule, 
        AdminModule,
        OwlModule,
        NotFoundModule
    ],
    bootstrap: [AppComponent],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: HttpErrorInterceptor,
            multi: true
        },
        {
            provide: AuthServiceConfig,
            useFactory: getAuthServiceConfigs
          }
    ]
})
export class AppModule {}