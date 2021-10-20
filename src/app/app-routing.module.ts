import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuicklinkStrategy, QuicklinkModule } from 'ngx-quicklink';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./prueba-ito/prueba-ito.module').then((m) => m.PruebaITOModule),
  },
];

@NgModule({
  imports: [
    QuicklinkModule,
    RouterModule.forRoot(routes, {
      preloadingStrategy: QuicklinkStrategy,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
