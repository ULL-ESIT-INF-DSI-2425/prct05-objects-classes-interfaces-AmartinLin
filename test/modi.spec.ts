import { describe, expect, test } from "vitest";
//import { Persona } from "../src/modi/Persona"
import { Estudiante } from "../src/modi/Estudiante";
import { Profesor } from "../src/modi/Profesor";

describe("Clase Estudiante", () => {
  const estudiante = new Estudiante("Alberto", "Castellón", "22-3-1999", 123456789, "Castaño", "Negros", "alberto@ull.es", 8);
  test("Getters", () => {
    expect(estudiante.nombre).toBe("Alberto");
    expect(estudiante.apellido).toBe("Castellón");
    expect(estudiante.nacimiento).toBe("22-3-1999");
    expect(estudiante.id).toBe(123456789);
    expect(estudiante.cPelo).toBe("Castaño");
    expect(estudiante.cOjos).toBe("Negros");
    expect(estudiante.correo).toBe("alberto@ull.es");
    expect(estudiante.asignaturas_matriculado).toBe(8);
  });

  test("Setters", () => {
    estudiante.nombre = "juan";
    expect(estudiante.nombre).toBe("juan");
    estudiante.apellido = "de la rosa";
    expect(estudiante.apellido).toBe("de la rosa");
    estudiante.nacimiento = "4-5-1994";
    expect(estudiante.nacimiento).toBe("4-5-1994");
    estudiante.correo = "correo@nose.es";
    expect(estudiante.correo).toBe("correo@nose.es");
    estudiante.asignaturas_matriculado = 18;
    expect(estudiante.asignaturas_matriculado).toBe(18);
  });

  test("Showinfo", () => {
    const estudiante1 = new Estudiante("Alberto", "Castellón", "22-3-1999", 123456789, "Castaño", "Negros", "alberto@ull.es", 8);
    expect(estudiante1.showinfo()).toBe("Castellón, Alberto {id: 123456789, nacimiento: 22-3-1999, color de pelo: Castaño, color de ojos: Negros, correo: alberto@ull.es, asignaturas matriculado: 8")
  });
});


describe("Clase Profesor", () => {
    const profesor = new Profesor("Alberto", "Castellón", "22-3-1999", 123456789, "Castaño", "Negros", "alberto@ull.docente.es", ["13:40", "17:00"], 4);
    test("Getters", () => {
      expect(profesor.nombre).toBe("Alberto");
      expect(profesor.apellido).toBe("Castellón");
      expect(profesor.nacimiento).toBe("22-3-1999");
      expect(profesor.id).toBe(123456789);
      expect(profesor.cPelo).toBe("Castaño");
      expect(profesor.cOjos).toBe("Negros");
      expect(profesor.correo_institucional).toBe("alberto@ull.docente.es");
      expect(profesor.horario).toStrictEqual(["13:40", "17:00"]);
      expect(profesor.numero_asignaturas_impartidas).toBe(4);
    });
  
    test("Setters", () => {
      profesor.nombre = "juan";
      expect(profesor.nombre).toBe("juan");
      profesor.apellido = "de la rosa";
      expect(profesor.apellido).toBe("de la rosa");
      profesor.nacimiento = "4-5-1994";
      expect(profesor.nacimiento).toBe("4-5-1994");
      profesor.correo_institucional = "correo@nose.es";
      expect(profesor.correo_institucional).toBe("correo@nose.es");
      profesor.horario = ["18:00", "20:00"];
      expect(profesor.horario).toStrictEqual(["18:00", "20:00"]);
      profesor.numero_asignaturas_impartidas = 18;
      expect(profesor.numero_asignaturas_impartidas).toBe(18);
    });
  
    test("Showinfo", () => {
        const profesorAlberto = new Profesor("Alberto", "Castellón", "22-3-1999", 123456789, "Castaño", "Negros", "alberto@ull.docente.es", ["13:40", "17:00"], 4);
        expect(profesorAlberto.showinfo()).toBe("Castellón, Alberto {id: 123456789, nacimiento: 22-3-1999, color de pelo: Castaño, color de ojos: Negros, correo institucional: alberto@ull.docente.es, horario: de 13:40 a 17:00, numero de asignaturas impartidas: 4")
    });
})