import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BedakPageRoutingModule } from './bedak-routing.module';

import { BedakPage } from './bedak.page';
import { BedakService } from './bedak.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BedakPageRoutingModule
  ],
  declarations: [BedakPage],
  providers: [BedakService]
})
export class BedakPageModule {}
