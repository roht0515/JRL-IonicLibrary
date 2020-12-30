import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SetProductsComponent } from './set-products/set-products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    SetProductsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    Ng2SearchPipeModule
  ]
})
export class BackendModule { }
