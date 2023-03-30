import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DataindukPage } from './datainduk.page';

const routes: Routes = [
  {
    path: '',
    component: DataindukPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DataindukPageRoutingModule {}
