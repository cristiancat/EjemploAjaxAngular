import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { SushiComponent } from './sushi/sushi.component';
import { CaloriasComponent } from './calorias/calorias.component';
import { AppComponent } from './app.component';

const appRoutes:Routes=[
    {path:"",component:SushiComponent},
    {path:'sushi',component:SushiComponent},
    {path:'calorias',component:CaloriasComponent},

];

export const appRoutingProviders:any[]=[];

export const routing:ModuleWithProviders=RouterModule.forRoot(appRoutes);