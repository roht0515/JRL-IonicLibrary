import { Component, Input, OnInit } from '@angular/core';
import { ProductoPedido } from '../models';

@Component({
  selector: 'app-carritoitem',
  templateUrl: './carritoitem.component.html',
  styleUrls: ['./carritoitem.component.scss'],
})
export class CarritoitemComponent implements OnInit {

  @Input() productoPedido: ProductoPedido;
  constructor() { }

  ngOnInit() {}

}
