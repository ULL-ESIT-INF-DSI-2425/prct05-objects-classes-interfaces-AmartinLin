/**
 * Interfaz que nos ayudará a almacenar datos de las canciones
 */
export interface Cancion {
  nombre: string,
  tiempo: number,
  genero: string,
  single: boolean,
  reproducciones: number,
}