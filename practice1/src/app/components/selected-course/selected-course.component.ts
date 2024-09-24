import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-course',
  templateUrl: './selected-course.component.html',
  styleUrls: ['./selected-course.component.css']
})
export class SelectedCourseComponent {
courseId: any;

constructor(private _activeRoute: ActivatedRoute){}

ngOnInit(){
  this.courseId = this._activeRoute.snapshot.paramMap.get('id');
}

}
