///<reference path="./../typings/globals/core-js/index.d.ts"/>
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app';

import { HomeComponent } from './a2/views/home.component';

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot([
        {
            path:'',
            component: HomeComponent
        }
    ]) ],
    declarations: [AppComponent, HomeComponent],
    bootstrap: [AppComponent]
})
export class AppModule { }