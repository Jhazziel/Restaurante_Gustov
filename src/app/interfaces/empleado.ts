import { Persona } from "./persona";

export interface Empleado extends Persona{
    Cargo: string;
    FechaIngreso: string;
    PersonaId: string;
}