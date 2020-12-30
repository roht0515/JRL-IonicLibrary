import { User } from "./shared/user";

export interface Producto {
    id: string;
    codigo: string;
    foto: string;
    descripcion: string;
    nombre: string;
    cantidad: number;
    precio: number;
    fecha: Date;
    id_categoria: string;
}

export interface Pedido {
    id: string;
    cliente: string;
    productos: ProductoPedido [];
    precioTotal:number;
    estado:EstadoPedido;
    fecha: Date;
}

export interface ProductoPedido {
    producto:Producto;
    cantidad:number;
}

export type EstadoPedido = 'enviado' | 'visto' | 'camino' | 'entregado';