import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DescriptionProductPage } from './description-product.page';

const routes: Routes = [
  {
    path: '',
    component: DescriptionProductPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DescriptionProductPageRoutingModule {}
