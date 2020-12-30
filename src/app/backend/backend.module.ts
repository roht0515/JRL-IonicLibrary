import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SetProductsComponent } from './set-products/set-products.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [
    SetProductsComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ]
})
export class BackendModule { }
