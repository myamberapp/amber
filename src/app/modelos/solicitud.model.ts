export class Solicitud {
    id?: string;
    nombres?: string;
    apellidos?: string;
    ciudad?: string;
    latitud?: number;
    longitud?: number;
    userId? : string;
    tipoEmergencia?: string;
    disponible?: boolean;
    tomadaPor?: string;
    completado?: boolean;
    createdAt?: Date;
}
