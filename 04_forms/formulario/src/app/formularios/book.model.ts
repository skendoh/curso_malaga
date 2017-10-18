export interface Book {
        autor: string;
        titulo: string;
        editorial: string;
        numpag: number;
        exlibris: boolean;
        genero: string;
        pais: Pais;
        user: User;
}

export interface Pais {
       codigo: string;
       nombre: string;
}

export interface User {
       name: string;
       telephone: number;
}
