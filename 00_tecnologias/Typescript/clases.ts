// Ejemplo de código en TypeScript

interface DatosLibro{
	tematica : string;
	paginas : number;
}

class Libro {
	private datolibro : DatosLibro;

    constructor(tematica, paginas) {
        this.datolibro.tematica = tematica;
        this.datolibro.paginas = paginas;
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