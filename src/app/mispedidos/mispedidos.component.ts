import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Pedido } from '../models';
import { CarritoService } from '../services/carrito.service';
import { FirestorageService } from '../services/firestorage.service';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-mispedidos',
  templateUrl: './mispedidos.component.html',
  styleUrls: ['./mispedidos.component.scss'],
})
export class MispedidosComponent implements OnInit {

  nuevoSuscriber:Subscription;
  pedidosNuevos:Pedido[]=[];

  constructor(public firestoreService:FirestoreService, public carritoService:CarritoService) { }

  ngOnInit() {}


  segmentChanged(ev: any){
    console.log(ev);
    const opc = ev.detail.value;
    if (opc === 'Nuevos') {
      this.getPedidosNuevos();
    }
    if (opc === 'Entregados') {
      
    }
  }

  getPedidosNuevos(){
    console.log('getPedidos');
    const uid = this.carritoService.getIdCarrito();
    const path= 'User/'+uid+'/pedidos/';
    this.firestoreService.getCollection<Pedido>(path).valueChanges().subscribe(res => {
      if (res.length) {
        console.log(res);
        this.pedidosNuevos=res;
      }
    })
  }

  getPedidosEntregados(){

  }
}
