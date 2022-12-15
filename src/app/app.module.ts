import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardsComponent } from './cards/cards.component';
import { MenuComponent } from './menu/menu.component';
import { MissionsComponent } from './missions/missions.component';
import { Misiones_Services } from './missions/services';
import {HttpClientModule} from '@angular/common/http';
import { LaunchComponent } from './launch/launch.component';
import { LanzamientosComponent } from './lanzamientos/lanzamientos.component';
import { Servicios_De_Lanzamiento } from './lanzamientos/lanzamientos.services';
@NgModule({
  declarations: [
    AppComponent,
    CardsComponent,
    MenuComponent,
    MissionsComponent,
    LaunchComponent,
    LanzamientosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [Misiones_Services,
    Servicios_De_Lanzamiento
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
