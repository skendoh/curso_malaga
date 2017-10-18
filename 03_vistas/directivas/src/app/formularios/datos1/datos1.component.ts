import { Libro } from './libro';
import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-datos1',
  templateUrl: './datos1.component.html',
  styleUrls: ['./datos1.component.css']
})
export class Datos1Component implements OnInit {
  sIdea: string;
  aIdeas: Array<string>;
  libro: Libro;
  autor: string;
  titulo: string;
  aLibros: Array<Libro>;

  constructor() { }

  btnInsertBook() {
    this.libro = new Libro(this.titulo, this.autor);
    console.log(this.libro);
   this.aLibros.push(this.libro);
  }

  ngOnInit() {
    this.sIdea = '';
    this.aIdeas = [];
    this.aLibros = [];
  }

  btnInsert() {
    if (this.sIdea !== '') {
    this.aIdeas.push(this.sIdea);
  }
    this.sIdea = '';
  }

  btnDelete() {
    this.aIdeas = [];
    this.sIdea = '';
  }

  btnDeleteOne() {
    // this.aIdeas.get(this.aIdeas.length) = [];
    this.sIdea = '';
  }
}
