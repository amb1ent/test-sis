///<reference path="./../typings/globals/core-js/index.d.ts"/>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app';

import { HomeComponent } from './a2/views/home.component';
import { ViewRetrospectiveComponent } from './a2/views/view-retrospective.component';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
        {
            path:'',
            component: HomeComponent
        },
        {
            path:'view-retrospective/:id',
            component: ViewRetrospectiveComponent
        }
    ]) ],
    declarations: [
        AppComponent,
        HomeComponent,
        ViewRetrospectiveComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }