import { Disco } from "./Disco";
import { Artista } from "./Artista";

interface IBiblioteca {
  info(): void;
  search(parametro: string) : void;
  numeroDeCanciones(nombreDisco: string): number;
  tiempoDeDisco(nombreDisco: string): number;
  vistasDeDisco(nombreDisco: string): number;
}

export class Biblioteca implements IBiblioteca {
  private _artistas: Artista[];

  /**
   * Constructor de la clase Biblioteca
   * @param artistas - lista de artistas 
   */
  constructor(...artistas: Artista[]) {
    this._artistas = artistas;
  }

  /**
   * Nos da información de nuestra biblioteca en forma de tabla
   * | index | nombre del artista | nombre del disco | Canción | Duracion en segundos | Género | si es single o no | número de reproducciones
   */
  info(): void {
    const tabla = this._artistas.flatMap(artista =>
      artista.discos.flatMap((disco) =>
        disco.canciones.map((cancion) => ({
          Artista: artista.nombre,
          Disco: disco.nombre,
          Canción: cancion.nombre,
          Duración: `${cancion.tiempo} seg`,
          Género: cancion.genero,
          Single: cancion.single ? "✅" : "❌",
          Reproducciones: cancion.reproducciones
        }))
      )
    );
    console.table(tabla);
  }  

  /**
   * Nos permite hacer una búsqueda a toda la biblioteca
   * (mediante el nombre únicamente)
   * @param query - String con el nombre de artista, disco o cancion
   * @returns tabla con los datos relacionados
   */
  search(query: string): void {
    query = query.toLowerCase();
    const artistasEncontrados: Artista[] = this._artistas.filter(artista =>
      artista.nombre.toLowerCase().includes(query)
    );
    if (artistasEncontrados.length > 0) {
      const tabla = artistasEncontrados.flatMap(artista =>
        artista.discos.flatMap(disco =>
          disco.canciones.map(cancion => ({
            Artista: artista.nombre,
            Disco: disco.nombre,
            Canción: cancion.nombre,
            Duración: `${cancion.tiempo} seg`,
            Género: cancion.genero,
            Single: cancion.single ? "✅" : "❌",
            Reproducciones: cancion.reproducciones
          }))
        )
      );
      console.table(tabla);
      return;
    }
    const discosEncontrados = this._artistas.flatMap(artista =>
      artista.discos.filter(disco =>
        disco.nombre.toLowerCase().includes(query)
      ).map(disco => ({ artista, disco }))
    );
    if (discosEncontrados.length > 0) {
      const tabla = discosEncontrados.flatMap(({ artista, disco }) =>
        disco.canciones.map(cancion => ({
          Artista: artista.nombre,
          Disco: disco.nombre,
          Canción: cancion.nombre,
          Duración: `${cancion.tiempo} seg`,
          Género: cancion.genero,
          Single: cancion.single ? "✅" : "❌",
          Reproducciones: cancion.reproducciones
        }))
      );
      console.table(tabla);
      return;
    }
    const cancionesEncontradas = this._artistas.flatMap(artista =>
      artista.discos.flatMap(disco =>
        disco.canciones
          .filter(cancion => cancion.nombre.toLowerCase().includes(query))
          .map(cancion => ({
            Artista: artista.nombre,
            Disco: disco.nombre,
            Canción: cancion.nombre,
            Duración: `${cancion.tiempo} seg`,
            Género: cancion.genero,
            Single: cancion.single ? "✅" : "❌",
            Reproducciones: cancion.reproducciones
          }))
      )
    );
    console.table(cancionesEncontradas);
  }

  /**
   * Método privado auxiliar que nos permite buscar un disco mediante el nombre
   * @param nombreDisco - nombre del disco
   * @returns el disco en concreto o nada
   */
  private buscarDisco(nombreDisco: string): Disco | null {
    for (const artista of this._artistas) {
      const discoEncontrado = artista.discos.find(disco =>
        disco.nombre.toLowerCase() === nombreDisco.toLowerCase()
      );
      if (discoEncontrado) {
        return discoEncontrado;
      }
    }
    return null; 
  }
  
  /**
   * numero total de todas las canciones de un disco
   * @param nombreDisco - nombre de un disco
   * @returns numero de canciones (si esque el disco existe)
   */
  numeroDeCanciones(nombreDisco: string): number {
    const disco = this.buscarDisco(nombreDisco);
    return disco ? disco.nSongs() : 0;
  }

  /**
   * Tiempo que dura un disco según la suma de sus canciones
   * @param nombreDisco - nombre del disco
   * @returns numero de segundos que dura el disco
   */
  tiempoDeDisco(nombreDisco: string): number {
    const disco = this.buscarDisco(nombreDisco);
    return disco ? disco.time() : 0;
  }

  /**
   * numero de reproducciones total de todas las canciones de un disco
   * @param nombreDisco - nombre de un disco
   * @returns numero de reproducciones (si esque el disco existe)
   */
  vistasDeDisco(nombreDisco: string): number {
    const disco = this.buscarDisco(nombreDisco);
    return disco ? disco.reproducciones() : 0;
  }
}
