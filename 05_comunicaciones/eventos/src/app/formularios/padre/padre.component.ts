import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {
nombre: string;
  constructor() { }

  ngOnInit() {
    this.nombre = '';
  }
  btnEvento($event) {
    this.nombre = $event;
  }

}
