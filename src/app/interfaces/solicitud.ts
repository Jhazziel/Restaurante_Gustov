import { Empleado } from "./empleado";

export interface Solicitud{
    SolicitudId: number;
    Razon: string;
    FechaSolicitud: Date;
    Confirmacion: boolean;
    Empleado: Empleado;
}