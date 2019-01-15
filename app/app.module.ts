import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{routing, appRoutingProviders} from './app.routing';

import { AppComponent } from './app.component';
import { SushiComponent } from './sushi/sushi.component';

import {FormsModule} from '@angular/forms';
import { CaloriasComponent } from './calorias/calorias.component';

import {HttpModule} from '@angular/http';
@NgModule({
  declarations: [
    AppComponent,
    SushiComponent,
    CaloriasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
