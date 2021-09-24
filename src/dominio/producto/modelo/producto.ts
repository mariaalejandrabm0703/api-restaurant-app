
import { PedidoProducto } from "src/dominio/pedido-producto/modelo/pedido-producto";

export class Producto {
  readonly #descripcion: string;
  readonly #categoria: string;
  readonly #precio: number;
  readonly #activo: string;  
  readonly #productos: PedidoProducto[];
  readonly #img: string;

  constructor(descripcion: string, categoria: string, precio: number, activo: string, productos: PedidoProducto[], img: string) {
    this.#descripcion = descripcion;
    this.#categoria = categoria;
    this.#precio = precio;
    this.#activo = activo;
    this.#productos = productos;
    this.#img = img;
  }

  get descripcion(): string {
    return this.#descripcion;
  }
  get categoria(): string {
    return this.#categoria;
  }
  get precio(): number {
    return this.#precio;
  }
  get activo(): string {
    return this.#activo;
  }

  get productos(): PedidoProducto[] {
    return this.#productos;
  }
  get img(): string {
    return this.#img;
  }
}
