import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  products: any;
  isloader:boolean=true;

  constructor(private _productservice:ProductService)
  {

  }
  ngOnInit(){
    this._productservice.getProducts().then(
      (res)=>{
        this.products=res.products
        console.log(this.products)
      }
       
   )
  
   
  
  }

courses = [
  "java",
  "html",
  "angular",
  "spring",
  "css"
]
uname: any;
postData(userform)
{
  console.log(userform.value);
  
}
}
