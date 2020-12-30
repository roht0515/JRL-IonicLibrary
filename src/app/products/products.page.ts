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
  constructor(public firestoreService:FirestoreService, public carritoService:CarritoService) {
    this.LoadProducts();
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
}
