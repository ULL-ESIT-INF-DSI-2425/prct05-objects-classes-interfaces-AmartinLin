import { describe, expect, test, vi} from "vitest";
import { Artista } from "../src/ejercicio-2/Artista";
import { Disco } from "../src/ejercicio-2/Disco";
import { Cancion } from "../src/ejercicio-2/Cancion";
import { Biblioteca } from "../src/ejercicio-2/Biblioteca";

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

describe("Clase Disco", () => {
  test("Calcular número de canciones del disco", () => {
    expect(disco.nSongs()).toBe(1);
    expect(layla.nSongs()).toBe(2);
  })

  test("Calcular tiempo de duración del disco en segundos", () => {
    expect(disco.time()).toBe(314);
    expect(layla.time()).toBe(399 + 425);
  })

  test("Calcular el número de reproducciones del disco", () => {
    expect(disco.reproducciones()).toBe(810465);
    expect(layla.reproducciones()).toBe(56832104 + 264145);
  })
});

describe("Clase Artista", () => {
  test("Saber los datos del artista", () => {
    expect(EricClapton.discos).toStrictEqual([disco, layla])
    // Lo ponemos así ya que nos da igual el orden en que nos de las canciones por ahora
    expect(EricClapton.canciones()).toEqual(expect.arrayContaining([laylaSong, tellTheTruth, cancion]));
  });
});

describe("Clase Biblioteca", () => {
  const miBiblioteca: Biblioteca = new Biblioteca(EricClapton)
  const otraBiblioteca = new Biblioteca(EricClapton, TaylorSwift);
  test ("Información completa de la tabla", () => {
    const consoleSpy = vi.spyOn(console, "table").mockImplementation(() => {});
    miBiblioteca.info();
    expect(consoleSpy).toHaveBeenCalledWith([
      {
        Artista: "Eric Clapton",
        Disco: "Crossroads",
        Canción: "Crossroads",
        Duración: "314 seg",
        Género: "Blues Rock",
        Single: "❌" ,
        Reproducciones: 810465,
      },
      {
        Artista: "Eric Clapton",
        Disco: "Layla and Other Assorted Love Songs",
        Canción: "Layla",
        Duración: "425 seg",
        Género: "Blues Rock",
        Single: "❌" ,
        Reproducciones: 56832104,
      },
      {
        Artista: "Eric Clapton",
        Disco: "Layla and Other Assorted Love Songs",
        Canción: "Tell the truth",
        Duración: "399 seg",
        Género: "Blues Rock",
        Single: "❌" ,
        Reproducciones: 264145,
      },
    ]);
    consoleSpy.mockRestore();
  })

  test("Búsqueda por nombre", () => {
    const consoleSpy = vi.spyOn(console, "table").mockImplementation(() => {});
    otraBiblioteca.search("tell The Truth");
    expect(consoleSpy).toHaveBeenCalledWith([
      {
        Artista: "Eric Clapton",
        Disco: "Layla and Other Assorted Love Songs",
        Canción: "Tell the truth",
        Duración: "399 seg",
        Género: "Blues Rock",
        Single: "❌" ,
        Reproducciones: 264145,
      },
    ]);
    otraBiblioteca.search("Taylor swift")
    expect(consoleSpy).toHaveBeenCalledWith([
      {
        Artista: "Taylor Swift",
        Disco: "Speak Know",
        Canción: "Back to December",
        Duración: "304 seg",
        Género: "Pop",
        Single: "❌" ,
        Reproducciones: 349159746,
      },
      {
        Artista: "Taylor Swift",
        Disco: "Speak Know",
        Canción: "Enchanted",
        Duración: "304 seg",
        Género: "Pop",
        Single: "❌" ,
        Reproducciones: 60987447,
      },
      {
        Artista: "Taylor Swift",
        Disco: "Speak Know",
        Canción: "Mine",
        Duración: "211 seg",
        Género: "Pop",
        Single: "❌" ,
        Reproducciones: 324175705,
      },
      {
        Artista: "Taylor Swift",
        Disco: "Fearless",
        Canción: "You Belong to Me",
        Duración: "210 seg",
        Género: "Country Pop",
        Single: "❌" ,
        Reproducciones: 41447782,
      },
      {
        Artista: "Taylor Swift",
        Disco: "Fearless",
        Canción: "Love Story",
        Duración: "241 seg",
        Género: "Country Pop",
        Single: "❌" ,
        Reproducciones: 52958553,
      },
      {
        Artista: "Taylor Swift",
        Disco: "Lover",
        Canción: "Cruel Summer",
        Duración: "234 seg",
        Género: "Country Pop",
        Single: "❌" ,
        Reproducciones: 228501899,
      },
      {
        Artista: "Taylor Swift",
        Disco: "Lover",
        Canción: "The Archer",
        Duración: "300 seg",
        Género: "Country Pop",
        Single: "❌" ,
        Reproducciones: 41287853,
      },
    ]);
    consoleSpy.mockRestore();
  });

  test("Número de canciones por disco", () => {
    expect(otraBiblioteca.numeroDeCanciones("Crossroads")).toBe(1)
    expect(otraBiblioteca.numeroDeCanciones("Fearless")).toBe(2)
  })

  test("segundos de reproduccion por disco", () => {
    expect(otraBiblioteca.tiempoDeDisco("Crossroads")).toBe(314)
    expect(otraBiblioteca.tiempoDeDisco("Fearless")).toBe(210 + 241)
  })

  test("numero de reproducciones por disco", () => {
    expect(otraBiblioteca.vistasDeDisco("Crossroads")).toBe(810465)
    expect(otraBiblioteca.vistasDeDisco("Fearless")).toBe(41447782 + 52958553)
  })
})