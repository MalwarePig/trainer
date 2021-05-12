import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuPage } from './menu.page';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children:[
      {
        path: 'rutinas',
        loadChildren: () => import('./../../pages/rutinas/rutinas.module').then( m => m.RutinasPageModule)
      },
      {
        path: 'calendario',
        loadChildren: () => import('./../../pages/calendario/calendario.module').then( m => m.CalendarioPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./../../pages/perfil/perfil.module').then( m => m.PerfilPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuPageRoutingModule {}
