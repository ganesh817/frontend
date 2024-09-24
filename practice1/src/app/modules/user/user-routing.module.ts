import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user.component';
import { OrdersComponent } from './orders/orders.component';
import { FormsComponent } from './components/forms/forms.component';
import { Forms1Component } from './components/forms1/forms1.component';

const routes: Routes = [
  { 
    path: '', 
    component: UserComponent 
  },
  {
    path :'orders',
    component :OrdersComponent
  },
  {
    path :'form',
    component :FormsComponent
  },
  {
    path :"forms",
    component:Forms1Component
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
