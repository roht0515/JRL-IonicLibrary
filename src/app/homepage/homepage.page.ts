import { CarritoService } from 'src/app/services/carrito.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Pedido } from './../models';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../shared/authentication-service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.page.html',
  styleUrls: ['./homepage.page.scss'],
})
export class HomepagePage implements OnInit {

  pedido:Pedido;
  carritoSuscriber: Subscription;
  cantidad: number;
  constructor(public authService: AuthenticationService,public carritoService:CarritoService, public router: Router) {
    this.loadPedido();
  }

  ngOnInit() {
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
