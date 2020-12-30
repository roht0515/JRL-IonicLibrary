import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pedido } from './../models';
import { Component, Input, OnInit } from '@angular/core';
import { Producto } from '../models';
import { CarritoService } from '../services/carrito.service';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  @Input() producto: Producto;
  private path = "productos/";
  productos: Producto [] = [];
  filterTerm: string;
  pedido:Pedido;
  carritoSuscriber: Subscription;
  cantidad: number;
  constructor(public firestoreService:FirestoreService, public carritoService:CarritoService, public router: Router) {
    this.LoadProducts();
    this.loadPedido();
   }

  ngOnInit() {
    console.log('el producto es ', this.producto)
  }

  LoadProducts() {
    this.firestoreService.getCollection<Producto>(this.path).valueChanges().subscribe(res => {
      this.productos = res;
    });
  }

  addCarrito(producto: Producto){
    this.carritoService.addProducto(producto);
  }

  loadPedido(){
    this.carritoSuscriber= this.carritoService.getCarrito().subscribe(res =>{
      console.log('loadPedido() en carrito')
      this.pedido=res;
      this.getCantidad();
    });
  }

  getCantidad(){
    this.cantidad = 0
    this.pedido.productos.forEach( producto =>{
      this.cantidad=  producto.cantidad + this.cantidad;
    })
  }

  redirectCarrito(){
    this.router.navigate(["carrito"]);
  }
}
