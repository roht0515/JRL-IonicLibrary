import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pedido } from '../models';
import { CarritoService } from '../services/carrito.service';
import { FirestoreService } from '../services/firestore.service';
import { AuthenticationService } from '../shared/authentication-service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.page.html',
  styleUrls: ['./carrito.page.scss'],
})
export class CarritoPage implements OnInit, OnDestroy {

  pedido:Pedido;
  carritoSuscriber: Subscription;
  total: number;
  cantidad: number;

  constructor(public firestoreService:FirestoreService, public carritoService:CarritoService,public authenticationService:AuthenticationService) {
    this.initCarrito();
    this.loadPedido();
  }

  ngOnInit() {
  }

  ngOnDestroy(){
    console.log('destrooy');
    if (this.carritoSuscriber) {
      
      this.carritoSuscriber.unsubscribe();
    }
  }

  loadPedido(){
    this.carritoSuscriber= this.carritoService.getCarrito().subscribe(res =>{
      console.log('loadPedido() en carrito')
      this.pedido=res;
      this.getTotal();
      this.getCantidad();
    });
  }

  initCarrito(){
    this.pedido = {
      id: '',
      cliente:'',
      productos:[],
      precioTotal:null,
      estado:'enviado',
      fecha:new Date(),
    }
  }

  getTotal(){
    this.total=0;
    this.pedido.productos.forEach( producto =>{
      this.total= (producto.producto.precio) * producto.cantidad  + this.total;

    })
  }

  getCantidad(){
    this.cantidad = 0
    this.pedido.productos.forEach( producto =>{
      this.cantidad=  producto.cantidad + this.cantidad;

    })
  }

  pedir(){
    if (!this.pedido.productos.length) {
      console.log('Sin items en el carrito ');
      return;
    }
    this.pedido.fecha=new Date();
    this.pedido.precioTotal=this.total;
    this.pedido.id=this.firestoreService.getId();
    const uid = this.carritoService.getIdCarrito();
    const path= 'User/'+uid+'/pedidos/';
    console.log("pedir ->",this.pedido,uid,path);
    this.firestoreService.createProduct(this.pedido,path,this.pedido.id).then(() => {
      console.log('guardadocon exito');
      this.carritoService.clearCarrito();
    });
  }
}
