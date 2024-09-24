import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { SelectedCourseComponent } from './components/selected-course/selected-course.component';
import { ProductComponent } from './components/product/product.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { RecordsComponent } from './user/records/records.component';
import { SelectedProductComponent } from './components/selected-product/selected-product.component';
import { HostDirective } from './directives/host.directive';
import { MobileComponent } from './components/mobile/mobile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CourseComponent,
    CourseDetailsComponent,
    PagenotfoundComponent,
    SelectedCourseComponent,

    RecordsComponent,
    SelectedProductComponent,
    HostDirective,
    MobileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
