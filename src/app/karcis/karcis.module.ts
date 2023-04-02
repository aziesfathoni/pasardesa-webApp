import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KarcisPageRoutingModule } from './karcis-routing.module';

import { KarcisPage } from './karcis.page';
import { KarcisService } from './karcis.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KarcisPageRoutingModule
  ],
  declarations: [KarcisPage]
})
export class KarcisPageModule {}
