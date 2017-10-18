import { Book, Pais, User } from '../book.model';
import { Component, OnInit, ViewChild } from '@angular/core';
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
user: User;
@ViewChild('myform') form: any;

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
        },
        user: {
          name: '',
          telephone: 0
        }
    };

    this.aPaises = [
      {codigo: 'UK', nombre: 'Reino unido'},
      {codigo: 'SP', nombre: 'España'}
    ];
    this.user = {
       name: '',
          telephone: 0
        }
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
        },
        user: {
          name: '',
          telephone: 0
        }
    };
    this.estaEnviado = false;
  }

  btnDeleteOne() {

  }
}
