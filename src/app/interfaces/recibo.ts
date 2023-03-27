import { Empleado } from "./empleado";
import { Solicitud } from "./solicitud";
import { Vacaciones } from "./vacaciones";

export interface Recibo{
    Empleado: Empleado;
    Solicitud: Solicitud;
    Vacaciones: Vacaciones;
}