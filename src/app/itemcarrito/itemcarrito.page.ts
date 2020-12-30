import { Component, Input, OnInit } from '@angular/core';
import { ProductoPedido } from '../models';

@Component({
  selector: 'app-itemcarrito',
  templateUrl: './itemcarrito.page.html',
  styleUrls: ['./itemcarrito.page.scss'],
})
export class ItemcarritoPage implements OnInit {

  @Input() productoPedido: ProductoPedido;

  constructor() { }

  ngOnInit() {
  }

}
