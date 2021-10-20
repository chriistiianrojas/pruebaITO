import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PruebaITOListComponent } from './prueba-itolist/prueba-itolist.component';
import { PruebaITOComponent } from './prueba-ito.component';



const routes: Routes = [
  { path: '', component: PruebaITOComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PruebaITORoutingModule { }
