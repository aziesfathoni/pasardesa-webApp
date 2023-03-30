import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DataindukPageRoutingModule } from './datainduk-routing.module';

import { DataindukPage } from './datainduk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DataindukPageRoutingModule
  ],
  declarations: [DataindukPage]
})
export class DataindukPageModule {}
