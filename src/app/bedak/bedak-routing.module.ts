import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BedakPage } from './bedak.page';

const routes: Routes = [
  {
    path: '',
    component: BedakPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BedakPageRoutingModule {}
