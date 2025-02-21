import { Disco } from "./Disco";
import { Cancion } from "./Cancion";

interface IArtista {
  canciones(): Cancion[];
}

export class Artista implements IArtista {
  private _nombre: string;
  private _oyentes: number;
  private _discos: Disco[];

  constructor(nombre: string, oyentes_mensuales: number, discos: Disco[]) {
    this._discos = discos;
    this._oyentes = oyentes_mensuales;
    this._nombre = nombre;
  }

  get discos() : Disco[] {
    return this._discos;
  }

  canciones(): Cancion[] {
    let retorno_canciones: Cancion[] = [];
    this._discos.forEach((disco) => {
      disco.canciones.forEach((cancion) => {
        retorno_canciones.push(cancion)
      })
    });
    return retorno_canciones;
  }
}