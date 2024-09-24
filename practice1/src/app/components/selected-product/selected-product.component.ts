import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-product',
  templateUrl: './selected-product.component.html',
  styleUrls: ['./selected-product.component.css']
})
export class SelectedProductComponent {
  productData;
  constructor(private _activeRoute:ActivatedRoute){

  }

ngOnInit(){
  this.productData=this._activeRoute.snapshot.paramMap.get("id")
}

}
