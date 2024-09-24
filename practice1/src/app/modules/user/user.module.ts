import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { OrdersComponent } from './orders/orders.component';
import { FormsComponent } from './components/forms/forms.component';
import { Forms1Component } from './components/forms1/forms1.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UserComponent,
    OrdersComponent,
    FormsComponent,
    Forms1Component,
    
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class UserModule { }
