import { Component, OnInit } from '@angular/core';
import { Producto } from '../models';
import { FirestoreService } from '../services/firestore.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {

  private path = "productos/";
  productos: Producto [] = [];

  constructor(public firestoreService:FirestoreService) {
    this.LoadProducts();
   }

  ngOnInit() {
  }

  LoadProducts() {
    this.firestoreService.getCollection<Producto>(this.path).valueChanges().subscribe(res => {
      this.productos = res;
    });
  }
}
