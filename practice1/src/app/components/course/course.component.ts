import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {

  courses:any;
  constructor(private _courseService:CourseService, private _router:Router){

  }
  ngOnInit(){
    this.courses = this._courseService.getCourses();
    // this.courses = this.courses.filter(c => c.id == 1);
  }

  redirectToSelectedCourse(id){
    this._router.navigate(['/selected-course', id]);

  }
}
