import { Cancion } from "./Cancion";

/**
 * Interfaz de Disco
 */
interface IDisco {
  time(): number;
  nSongs(): number;
  reproducciones(): number;
}

export class Disco implements IDisco {
  private _nombre: string;
  private _salida: number;
  private _canciones: Cancion[];

  /**
   * Constructor de la calse Disco
   * @param nombre - Nombre del disco
   * @param salida - Año de saida del disco
   * @param canciones - Lista de canciones que tiene el disco
   */
  constructor(nombre: string, salida: number, canciones: Cancion[]) {
    this._nombre = nombre;
    this._salida = salida;
    this._canciones = canciones;
  }

  /**
   * Nos dice el numero de canciones que tiene el disco
   * @returns - numero de canciones
   */
  nSongs(): number {
    return this._canciones.length;
  }

  /**
   * Cuanto dura el total del disco
   * @returns - numero de segundo que dura el disco
   */
  time(): number {
    return this._canciones.reduce((acc, cancion) => acc + cancion.tiempo, 0);
  }

  /**
   * Numero de reproducciones que tiene el disco
   * teniendo en cuenta las vistas de cada cancion
   * @returns - numero de visitas
   */
  reproducciones(): number {
    return this._canciones.reduce((acc, cancion) => acc + cancion.reproducciones, 0);
  }

  /**
   * Getter para el nombre del disco
   */
  get nombre() {
    return this._nombre;
  }

  /**
   * Getter para el año de salida
   */
  get year() {
    return this._salida;
  }

  /**
   * Getter para el array de canciones del disco
   */
  get canciones() {
    return this._canciones;
  }
}
