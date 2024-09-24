import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor() { }

  public getCourses(){
    return [
      {
        id: 1,
        name: "JAVA",
        price: 20000
      },
      {
        id: 2,
        name: "HTML",
        price: 30000
      },
      {
        id: 3,
        name: "CSS",
        price: 40000
      },
      {
        id: 4,
        name: "Angular",
        price: 35000
      },
    ]
  }
}
