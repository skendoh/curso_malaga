export interface Book {
        autor: string;
        titulo: string;
        editorial: string;
        numpag: number;
        exlibris: boolean;
        genero: string;
        pais: Pais;
}

export interface Pais {
       codigo: string;
       nombre: string;
}
