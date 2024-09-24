import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  ngOnInit(){
    let p=new Promise((resolve, reject)=>{
            console.log('this is console')
            reject("this is failure");
            resolve("this is success");
    })
    p.then((res)=>{
      console.log(res)
    })

  
      let o=new Observable((res)=>{
console.log("this is observable")
       })

  }

}
