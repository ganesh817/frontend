import { Component } from '@angular/core';
import { CourseService } from 'src/app/services/course.service';

@Component({
  selector: 'app-course-details',
  templateUrl: './course-details.component.html',
  styleUrls: ['./course-details.component.css']
})
export class CourseDetailsComponent {
  
  courses;
constructor(private _courseDetails:CourseService){}

ngOnInit(){
  this.courses = this._courseDetails.getCourses();
}

}
