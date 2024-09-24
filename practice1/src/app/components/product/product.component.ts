import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  product;
 count:number;
  posts;
  constructor(private _getProducts:ProductService,private _Router:Router){}
  ngOnInit(){
     this._getProducts.getProducts().then(
      (res)=>{
        this.product = res.products
        console.log(this.product)
      }
    )
  }

  
  

 

  redirectto(id) {
     this._Router.navigate(['/selected-product',id])
  }

  

}
