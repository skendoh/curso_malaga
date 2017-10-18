import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Datos1Component } from './datos1/datos1.component';
import { Datos2Component } from './datos2/datos2.component';
import { Datos3Component } from './datos3/datos3.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HijoComponent } from './hijo/hijo.component';
import { PadreComponent } from './padre/padre.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [Datos1Component, Datos2Component, Datos3Component, HijoComponent, PadreComponent],
  exports: [Datos1Component, Datos2Component, Datos3Component, PadreComponent, HijoComponent]
})
export class FormulariosModule { }
