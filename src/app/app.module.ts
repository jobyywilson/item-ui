import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { AppComponent } from './app.component';
import { appRoutingModule } from './app.routing';

import { BasicAuthInterceptor, ErrorInterceptor } from './_helpers';
import { HomeComponent } from './home';
import { LoginComponent } from './login';;
import { ItemListComponent } from './item-list/item-list.component';
import { UserIdleModule } from 'angular-user-idle';
import {
    MatGridListModule,
    MatToolbarModule,
  } from '@angular/material';
import { ItemComponent } from './item/item.component'
@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
        FormsModule,
        UserIdleModule.forRoot({idle: 5, timeout: 5, ping: 5}),
        
    MatToolbarModule,
    MatGridListModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        ItemListComponent ,
        ItemComponent   ],
    providers: [
        { provide: HTTP_INTERCEPTORS, useClass: BasicAuthInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }