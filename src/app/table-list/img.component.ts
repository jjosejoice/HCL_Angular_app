import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-img',
  template: `<img style="height: 20px;"[src]="value">`
})
export class ImgComponent {
  @Input() value:string="";
  constructor() { 
    console.log(this.value);
  }
  

}
