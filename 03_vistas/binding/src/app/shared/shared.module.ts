import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from './logo/logo.component';
import { PieComponent } from './pie/pie.component';
import { CabezaComponent } from './cabeza/cabeza.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [LogoComponent,
  PieComponent,
  CabezaComponent],

  exports : [
  PieComponent,
  CabezaComponent]
})
export class SharedModule { }
