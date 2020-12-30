import { FirestorageService } from './../../services/firestorage.service';
import { Producto } from './../../models';
import { FirestoreService } from './../../services/firestore.service';
import { Component, OnInit, enableProdMode } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-set-products',
  templateUrl: './set-products.component.html',
  styleUrls: ['./set-products.component.scss'],
})
export class SetProductsComponent implements OnInit {

  newProduct: Producto;
  private path = "productos/";
  productos: Producto [] = [];
  enabledNewProduct = false;
  loading: any;
  toast: any;
  newFile = '';
  constructor(public firestoreService: FirestoreService,
              public loadingController: LoadingController,
              public toastController: ToastController,
              public firestorageService: FirestorageService) {
   }

  ngOnInit() {
    this.getProducts();
  }

  async saveProduct() {
    this.presentLoading();
    const path = 'Productos';
    const name = this.newProduct.nombre;
    if(this.newFile != ''){
      const res = await this.firestorageService.uploadImage(this.newFile, path, name);
      this.newProduct.foto = res;
    }
    this.firestoreService.createProduct(this.newProduct,this.path, this.newProduct.id).then( res => {
        this.enabledNewProduct = false;
        this.loading.dismiss();
        this.presentToast("Producto guardado con exito.");
    }).catch(error => {
      this.presentToast("Error, no se pudo guardar el producto.");
    });
  }

  getProducts() {
    this.firestoreService.getCollection<Producto>(this.path).valueChanges().subscribe(res => {
      this.productos = res;
    });
  }

  updateProduct(producto: Producto) {
    this.firestoreService.deleteProduct(this.path, producto.id);
  }

  deleteProduct(producto: Producto) {
    this.firestoreService.deleteProduct(this.path, producto.id);
  }

  newProd() {
    this.enabledNewProduct = true;
    this.newProduct = {
      id: this.firestoreService.getId(),
      codigo: '',
      foto: '',
      descripcion: '',
      nombre: '',
      cantidad: null,
      precio: null,
      fecha: new Date(),
      id_categoria: ''
    };
  }

  async presentLoading() {
    this.loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Guardando...',
    });
    await this.loading.present();
  }

  async presentToast(msg: string) {
    this.toast = await this.toastController.create({
      message: msg,
      duration: 500
    });
    this.toast.present();
  }

  imageUploaded(event: any) {
    if(event.target.files && event.target.files[0]) {
      this.newFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = ((image) => {
        const data = image.target.result as string;
        this.newProduct.foto = data;
      });
      reader.readAsDataURL(event.target.files[0]);
    } else { 
      this.newProduct.foto = '';
    }
  }
}
