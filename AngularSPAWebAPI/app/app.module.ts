import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Http } from '@angular/http';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { SharedModule } from './shared/shared.module';

import { AuthGuard } from './services/auth.guard';
import { AuthenticationService } from './services/authentication.service';
import { IdentityService } from './services/identity.service';

import { LogService } from './services/log.service';
import { LogPublishersService } from './services/log-publishers.service';

import { BrowserStorage } from './services/browser-storage';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

// angular2-jwt config for JiT and AoT compilation.
import { AuthHttp, AuthConfig } from 'angular2-jwt';

// Set tokenGetter to use the same storage in BrowserStorage.
export function getAuthHttp(http: Http) {
    return new AuthHttp(new AuthConfig({
        noJwtError: true,
        tokenGetter: (() => localStorage.getItem("id_token"))
    }), http);
}

@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedModule
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    exports: [
    ],
    providers: [
        Title,
        AuthGuard,
        AuthenticationService,
        IdentityService,
        LogService,
        LogPublishersService,
        BrowserStorage,
        {
            provide: AuthHttp,
            useFactory: getAuthHttp,
            deps: [Http]
        }        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
