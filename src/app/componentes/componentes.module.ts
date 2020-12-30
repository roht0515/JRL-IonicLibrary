import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductocarritoComponent } from './productocarrito/productocarrito.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProductocarritoComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule,
  ],exports:[
    ProductocarritoComponent
  ]
})
export class ComponentesModule { }
