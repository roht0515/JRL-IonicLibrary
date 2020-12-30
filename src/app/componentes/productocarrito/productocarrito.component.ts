import { Component, Input, OnInit } from '@angular/core';
import { ProductoPedido } from 'src/app/models';
import { CarritoService } from 'src/app/services/carrito.service';

@Component({
  selector: 'app-productocarrito',
  templateUrl: './productocarrito.component.html',
  styleUrls: ['./productocarrito.component.scss'],
})
export class ProductocarritoComponent implements OnInit {
  @Input() productoPedido: ProductoPedido;
  constructor(public carritoService:CarritoService) { }

  ngOnInit() {}

  addCarrito(){
    console.log('addCarrito()')
    this.carritoService.addProducto(this.productoPedido.producto);
  }

  removeCarrito(){
    this.carritoService.removeProducto(this.productoPedido.producto);
  }
}
