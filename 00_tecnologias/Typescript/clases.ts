// Ejemplo de código en TypeScript

interface DatosLibro{
	titulo : any;
	tematica : string;
	paginas : number;
	isbn : string | number;
}

class Libro implements DatosLibro{
	titulo;
	tematica;
	paginas;
	isbn : string;
	autor: {nombre: string, apellidos: string};

    constructor(tematica, paginas) {
        this.tematica = tematica;
        this.paginas = paginas;
    }
}

class LibroTecnico extends Libro {

	public precio: number;
	public capitulos: Array<string>;

	constructor(tematica, paginas, precio) {
		super(tematica, paginas);
		this.capitulos = [];
		this.precio = precio;
		// ...
	}
	
	precioTotal(pValor:number = 1) {
		console.log(pValor * this.precio);
	}
}

let oLibro = new LibroTecnico("Informatica", 129, 30);

//oLibro.Autor = "Pepe"
console.log(oLibro);