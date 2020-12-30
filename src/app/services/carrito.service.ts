import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Pedido, Producto, ProductoPedido } from '../models';
import { AuthenticationService } from '../shared/authentication-service';
import { User } from '../shared/user';
import { FirestoreService } from './firestore.service';

@Injectable({
  providedIn: 'root'
})
export class CarritoService {

  private pedido:Pedido;
  pedido$ = new Subject<Pedido>();
  path='carrito/';
  uid='';
  email=''

  constructor(public authentication:AuthenticationService, public firestoreService:FirestoreService) { 

    this.initCarrito();
    this.authentication.stateAuth().subscribe( res => {
      console.log(res.uid);
      if (res!== null) {
        this.email = res.email;
        this.uid = res.uid;
        this.loadCarrito();
      }
    })
    
  }

  getIdCarrito(){
    return this.uid;
  }

  loadCarrito(){
    const path='User/'+this.uid+'/'+'carrito';
    this.firestoreService.getProduct(path,this.uid).subscribe(res => {
      console.log(res);
      if (res) {
        this.pedido = res as Pedido;
        this.pedido$.next(this.pedido);
      }else{

        this.initCarrito();
      }
    })
  }

  initCarrito(){
    this.pedido = {
      id: this.uid,
      cliente:this.email,
      productos:[],
      precioTotal:null,
      estado:'enviado',
      fecha:new Date(),
    };
    this.pedido$.next(this.pedido);
  }

  getCarrito(): Observable<Pedido>{
    setTimeout(() => {
      this.pedido$.next(this.pedido);
    }, 100);
    return this.pedido$.asObservable();
  }

  addProducto(producto:Producto){
    if (this.uid.length) {
      const item= this.pedido.productos.find(productoPedido => {
        return(productoPedido.producto.id === producto.id)
      });
      if (item !== undefined) {
        item.cantidad ++;
      }else{

        const add: ProductoPedido = {
          cantidad:1,
          producto:producto,
        }
        this.pedido.productos.push(add)
      }
    }
    console.log('add pedido',this.pedido);
    const path = 'User/'+this.uid+'/'+this.path;
    this.firestoreService.createProduct(this.pedido,path,this.uid).then(() =>{
      console.log('añadido con exito');
    })
  }

  removeProducto(producto:Producto){
    if (this.uid.length) {
      let position = 0;
      const item= this.pedido.productos.find((productoPedido,index) => {
        position=index;
        return(productoPedido.producto.id === producto.id)
      });
      if (item !== undefined) {
        item.cantidad --;
        if (item.cantidad === 0) {
          this.pedido.productos.splice(position,1);
        }
      }
      this.pedido$.next(this.pedido);
      console.log('remove pedido',this.pedido);
      const path = 'User/'+this.uid+'/'+this.path;
      this.firestoreService.createProduct(this.pedido,path,this.uid).then(() =>{
        console.log('removidoo con exito');
      })
    }
  }

  realizarPedido(){

  }

  clearCarrito(){
    const path='User/'+this.uid+'/'+'carrito';
    this.firestoreService.deleteProduct(path,this.uid).then(()=> {
      this.initCarrito();

    })
  }
}
