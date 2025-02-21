import { describe, expect, test } from "vitest";
//import { Artista } from "../src/ejercicio-2/Artista";
import { Disco } from "../src/ejercicio-2/Disco";
import { Cancion } from "../src/ejercicio-2/Cancion";
//import { Biblioteca } from "../src/ejercicio-2/Biblioteca";

// describe("Clase Canción", () => {
//   const cancion : Cancion = {nombre: "Crossroads", tiempo: 314, genero: "Blues Rock", single: false, reproducciones: 810465};
//   test("", () => {
//     expect().toStrictEqual()
//   })
// });

describe("Clase Disco", () => {
  const cancion : Cancion = {nombre: "Crossroads", tiempo: 314, genero: "Blues Rock", single: false, reproducciones: 810465};
  const disco : Disco = new Disco ("Crossroads", 1988, [cancion]);

  const laylaSong : Cancion = {nombre: "Layla", tiempo: 425, genero: "Blues Rock", single: false, reproducciones: 56832104};
  const tellTheTruth : Cancion = {nombre: "Tell the truth", tiempo: 399, genero: "Blues Rock", single: false, reproducciones: 264145};
  const layla : Disco = new Disco("Layla and Other Assorted Love Songs", 1970, [laylaSong, tellTheTruth]);

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