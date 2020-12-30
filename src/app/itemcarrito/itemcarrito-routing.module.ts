import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ItemcarritoPage } from './itemcarrito.page';

const routes: Routes = [
  {
    path: '',
    component: ItemcarritoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemcarritoPageRoutingModule {}
