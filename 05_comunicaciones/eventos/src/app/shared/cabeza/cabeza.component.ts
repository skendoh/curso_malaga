import { style } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-cabeza',
    template: `
    <header>
	    <h1>{{curso}}</h1>
    </header>
    <app-logo></app-logo>
    `,
    styles: [`header {
        text-align: center;
        font-size: 1.8em;
        color : papayawhip;}`]
})

export class CabezaComponent implements OnInit {
    curso: string;
    constructor() { }

    ngOnInit() {
         this.curso = 'EVENTOS';
     }
}
