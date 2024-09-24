import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms1',
  templateUrl: './forms1.component.html',
  styleUrls: ['./forms1.component.css']
})
export class Forms1Component {
     constructor(private _formBuilder:FormBuilder){}
  registrationForm=this._formBuilder.group({
    username:['Ganesh',Validators.required],
    password:[],
    cpassword:[],
    city:[],
    state:[],
    pincode:[]
  })
  // registrationForm=new FormGroup({
  //   username:new FormControl('Ganesh',[Validators.required])
  // })

  postData(){
     console.log(this.registrationForm.value)
  }
  get userName(){
return this.registrationForm.get('username')
  }
}
