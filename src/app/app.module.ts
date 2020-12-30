import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AuthenticationService } from "./../app/shared/authentication-service";
import { BackendModule } from './backend/backend.module';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { CarritoitemComponent } from './carritoitem/carritoitem.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MispedidosComponent } from './mispedidos/mispedidos.component';
@NgModule({
  declarations: [AppComponent,CarritoitemComponent,MispedidosComponent],
  entryComponents: [],
  imports: [
    BrowserModule, 
    IonicModule.forRoot(), 
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    BackendModule,
    AppRoutingModule,
    AngularFireStorageModule,
    ReactiveFormsModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthenticationService,
    AngularFirestoreModule
  ], exports:[
    CarritoitemComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
