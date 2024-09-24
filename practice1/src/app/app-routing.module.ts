import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { ProductComponent } from './components/product/product.component';
import { SelectedProductComponent } from './components/selected-product/selected-product.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: "course",
    component: CourseComponent
  },
  {
    path: "course-details",
    component: CourseDetailsComponent
  },
  {
    path: "selected-course/:id",
    component: SelectedCourseComponent
  },
  {
    path: "product",
    component: ProductComponent
  },
  {
    path: "selected-product/:id",
    component: SelectedProductComponent
  },
  { path: 'user', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule) },
  {
    path: "**",
    component: PagenotfoundComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
