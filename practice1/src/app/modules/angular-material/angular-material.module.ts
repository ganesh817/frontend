import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';





const materialComponent =[
  MatInputModule,
MatDatepickerModule,
MatTableModule,
MatIconModule,
MatDividerModule
]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,materialComponent
  ],
  exports : [
    materialComponent
  ]
})
export class AngularMaterialModule { }
