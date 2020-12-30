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