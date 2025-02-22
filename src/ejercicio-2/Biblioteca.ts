import { Disco } from "./Disco";
import { Cancion } from "./Cancion";
import { Artista } from "./Artista";

interface IBiblioteca {
  info(): void;
  search(parametro: string) : void;
  numeroDeCanciones(nombreDisco: string): number;
  // tiempoDeDisco(nombreDisco: string): void;
  // vistasDeDisco(nombreDisco: string): void;
}

export class Biblioteca implements IBiblioteca {
  private _artistas: Artista[];

  constructor(...artistas: Artista[]) {
    this._artistas = artistas;
  }

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

  numeroDeCanciones(nombreDisco: string): number {
    for (const artista of this._artistas) {
      const discoEncontrado: (Disco | undefined) = artista.discos.find((disco) => 
        disco.nombre.toLocaleLowerCase() === nombreDisco.toLocaleLowerCase()
      );
      if (discoEncontrado) {
        return discoEncontrado.nSongs();
      }
    }
    return 0;
  }
}

// Eric Clapton
const cancion : Cancion = {nombre: "Crossroads", tiempo: 314, genero: "Blues Rock", single: false, reproducciones: 810465};
const disco : Disco = new Disco ("Crossroads", 1988, [cancion]);
const laylaSong : Cancion = {nombre: "Layla", tiempo: 425, genero: "Blues Rock", single: false, reproducciones: 56832104};
const tellTheTruth : Cancion = {nombre: "Tell the truth", tiempo: 399, genero: "Blues Rock", single: false, reproducciones: 264145};
const layla : Disco = new Disco("Layla and Other Assorted Love Songs", 1970, [laylaSong, tellTheTruth]);
const EricClapton: Artista = new Artista("Eric Clapton", 3000000, [disco, layla]);
// Taylor Swift
const backToDecember: Cancion = {nombre: "Back to December", tiempo: 304, genero: "Pop", single: false, reproducciones: 349159746};
const enchanted: Cancion = {nombre: "Enchanted", tiempo: 304, genero: "Pop", single: false, reproducciones: 60987447};
const mine: Cancion = {nombre: "Mine", tiempo: 211, genero: "Pop", single: false, reproducciones: 324175705};
const speakKnow: Disco = new Disco("Speak Know", 2010, [backToDecember, enchanted, mine]);
const youBelongToMe: Cancion = {nombre: "You Belong to Me", tiempo: 210, genero: "Country Pop", single: false, reproducciones: 41447782};
const loveStory: Cancion = {nombre: "Love Story", tiempo: 241, genero: "Country Pop", single: false, reproducciones: 52958553};
const fearless: Disco = new Disco("Fearless", 2021, [youBelongToMe, loveStory]);
const cruelSummer: Cancion = {nombre: "Cruel Summer", tiempo: 234, genero: "Country Pop" , single: false, reproducciones: 228501899};
const theArcher: Cancion = {nombre: "The Archer", tiempo: 300, genero: "Country Pop" , single: false, reproducciones: 41287853};
const lover: Disco = new Disco("Lover", 2019, [cruelSummer, theArcher]);
const TaylorSwift: Artista = new Artista("Taylor Swift", 88200000, [speakKnow, fearless, lover]);

const miBiblioteca: Biblioteca = new Biblioteca(EricClapton, TaylorSwift);

miBiblioteca.search("taylor")
