import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'datainduk',
    loadChildren: () => import('./datainduk/datainduk.module').then( m => m.DataindukPageModule)
  },
  {
    path: 'bedak',
    loadChildren: () => import('./bedak/bedak.module').then( m => m.BedakPageModule)
  },  {
    path: 'pegawai',
    loadChildren: () => import('./pegawai/pegawai.module').then( m => m.PegawaiPageModule)
  },
  {
    path: 'karcis',
    loadChildren: () => import('./karcis/karcis.module').then( m => m.KarcisPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
