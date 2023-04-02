import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KarcisPage } from './karcis.page';

const routes: Routes = [
  {
    path: '',
    component: KarcisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KarcisPageRoutingModule {}
