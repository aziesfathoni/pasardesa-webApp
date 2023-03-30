import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BedakPageRoutingModule } from './bedak-routing.module';

import { BedakPage } from './bedak.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BedakPageRoutingModule
  ],
  declarations: [BedakPage]
})
export class BedakPageModule {}
