import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})
export class HijoComponent implements OnInit {
@Input() nombre: string;
@Output() evento: EventEmitter<String> = new EventEmitter();
nombreGusta: string;
  constructor() { }

  ngOnInit() {
    this.nombreGusta = '';
  }

  contestar() {
    this.nombre = '';
    this.evento.emit(this.nombreGusta);
  }
}
