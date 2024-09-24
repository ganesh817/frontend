import { style } from '@angular/animations';
import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: '[appHost]'
})
export class HostDirective {

  constructor() { }

  @HostBinding('style.backgroundcolor') c_color="red"
  

}
