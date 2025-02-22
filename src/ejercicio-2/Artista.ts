import { Disco } from "./Disco";
import { Cancion } from "./Cancion";

interface IArtista {
  canciones(): Cancion[];
}

export class Artista implements IArtista {
  private _nombre: string;
  private _oyentes: number;
  private _discos: Disco[];

  /**
   * Contructor de la clase Artista
   * @param nombre - Nombre del artista
   * @param oyentes_mensuales - numero de oyentes mensuales
   * @param discos - lista de discos del artista
   */
  constructor(nombre: string, oyentes_mensuales: number, discos: Disco[]) {
    this._discos = discos;
    this._oyentes = oyentes_mensuales;
    this._nombre = nombre;
  }

  /**
   * Getter de numero de oyentes
   */
  get oyentes(): number {
    return this._oyentes;
  }

  /**
   * Getter del nombre del artista
   */
  get nombre() : string {
    return this._nombre
  }

  /**
   * Getter de los discos del artista
   */
  get discos() : Disco[] {
    return this._discos;
  }

  /**
   * Canciones que ha creado el artista
   * @returns Lista de interfaces de canciones
   */
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