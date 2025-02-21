import { Cancion } from "./Cancion";

export interface IDisco {
  time(): number;
  nSongs(): number;
  reproducciones(): number;
}

export class Disco implements IDisco {
  private _nombre: string;
  private _salida: number;
  private _canciones: Cancion[];

  constructor(nombre: string, salida: number, canciones: Cancion[]) {
    this._nombre = nombre;
    this._salida = salida;
    this._canciones = canciones;
  }

  nSongs(): number {
    return this._canciones.length;
  }

  time(): number {
    return this._canciones.reduce((acc, cancion) => acc + cancion.tiempo, 0);
  }

  reproducciones(): number {
    return this._canciones.reduce((acc, cancion) => acc + cancion.reproducciones, 0);
  }

  get nombre() {
    return this._nombre;
  }

  get year() {
    return this._salida;
  }
}
