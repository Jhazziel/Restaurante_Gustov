import { Empleado } from "./empleado";
import { SolicitudVacaciones } from "./solicitud-vacaciones";
import { Vacaciones } from "./vacaciones";

export interface Recibo{
    Empleado: Empleado;
    Solicitud: SolicitudVacaciones;
    Vacaciones: Vacaciones;
}