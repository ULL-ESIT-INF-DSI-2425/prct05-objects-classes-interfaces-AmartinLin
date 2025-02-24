import { Estudiante } from "./Estudiante";
import { Profesor } from "./Profesor";

export class Asignatura {
    constructor (
        private _codigo: number,
        private _nombre: string,
        private _titulacion: string,
        private _profesorado: Profesor[],
        private _alumnado: Estudiante[],
        private _alumnado_notas: Record<"string", number>[],
    ) {}

    /**
     * Nos devuelve un array con todos los datos de los profesores
     * @returns string[]
     */
    showProfesorado(): string[] {
        let data: string[] = [];
        this._profesorado.forEach((profesor) => {
            data.push(profesor.showinfo());
        })
        return data;
    }

    /**
     * Información del alumnado matriculado en la asignatura
     * @returns string[]
     */
    showAlumnado(): string[] {
        let data: string[] = [];
        this._alumnado.forEach((alumno) => {
            data.push(alumno.showinfo());
        })
        return data;
    }

    /**
     * Nos busca un profesor mediante nombre o correo
     * @param opcion - opcion de correo o nombre
     * @param identificador - identificador con el nombre o correo
     * @returns Profesor | undefined
     */
    buscaProfe(opcion: string, identificador: string): Profesor | undefined {
        let retorno: Profesor | undefined;
        if (opcion === "correo") {
            retorno = this._profesorado.find((profe) => {
                return profe.correo_institucional === identificador;
            })
        } else {
            retorno = this._profesorado.find((profe) => {
                return profe.nombre === identificador;
            })
        }
        return retorno;
    }
}