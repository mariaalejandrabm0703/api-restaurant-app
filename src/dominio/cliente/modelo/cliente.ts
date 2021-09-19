export class Cliente {
  readonly #nombre: string;
  readonly #identificacion: string;
  readonly #telefono: string;
  readonly #email: string;
  readonly #activo: string;

  constructor(nombre: string, identificacion: string, telefono: string, email: string, activo: string,) {
    this.#nombre = nombre;
    this.#identificacion = identificacion;
    this.#telefono = telefono;
    this.#email = email;
    this.#activo = activo;
  }

  get nombre(): string {
    return this.#nombre;
  }

  get identificacion(): string {
    return this.#identificacion;
  }

  get telefono(): string {
    return this.#telefono;
  }

  get email(): string {
    return this.#email;
  }

  get activo(): string {
    return this.#activo;
  }
}
