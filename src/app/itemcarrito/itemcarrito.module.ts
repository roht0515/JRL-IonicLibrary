import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ItemcarritoPageRoutingModule } from './itemcarrito-routing.module';

import { ItemcarritoPage } from './itemcarrito.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ItemcarritoPageRoutingModule
  ],
  declarations: [ItemcarritoPage]
})
export class ItemcarritoPageModule {}
