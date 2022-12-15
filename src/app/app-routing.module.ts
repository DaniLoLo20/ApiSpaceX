import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { LanzamientosComponent } from './lanzamientos/lanzamientos.component';
import { LaunchComponent } from './launch/launch.component';
import { MissionsComponent } from './missions/missions.component';

const routes: Routes = [
  {path:'Lanzamientos' ,component:LanzamientosComponent},
  {path:'Cards' ,component:CardsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
