export type Equipo = {
    id: string;
    nombre: string;
    ubicacion: string;
    estado:string;
};

export const equipos: Equipo[] = [
    { id: '1', nombre: 'Laptop', ubicacion: 'Oficina 1', estado: 'En uso' },
    { id: '2', nombre: 'Impresora', ubicacion: 'Oficina 2', estado: 'Disponible' },
    { id: '3', nombre: 'Router', ubicacion: 'Sala de servidores', estado: 'En reparación' },
];