import { Book, Pais } from '../book.model';
import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {
oLibro: Book;
aPaises: Array<Pais>;
estaEnviado: boolean;

  constructor() { }

  btnInsertBook() {

  }

  ngOnInit() {
    this.btnDelete();
    this.btnInsert();
    this.oLibro = {
        autor: '' ,
        titulo: '' ,
        editorial: '',
        numpag: 0,
        exlibris: false,
        genero: '',
        pais: {
            codigo: '',
            nombre: ''
        }
    };

    this.aPaises = [
      {codigo: 'UK', nombre: 'Reino unido'},
      {codigo: 'SP', nombre: 'España'}
    ];

    this.estaEnviado = false;
  }

  btnInsert() {
    console.log('works');
    this.estaEnviado = true;
  }

  btnDelete() {
  this.oLibro = {
        autor: '' ,
        titulo: '' ,
        editorial: '',
        numpag: 0,
        exlibris: false,
        genero: '',
        pais: {
            codigo: '',
            nombre: ''
        }
    };
    this.estaEnviado = false;
  }

  btnDeleteOne() {

  }
}
