import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cur',
  template: `<span>{{this.value}}</span>`
})
export class CurComponent implements OnInit {
  @Input() value:any="";
  constructor() { 
    console.log(this.value);
  }
  ngOnInit(): void {
    if((typeof this.value == "object")){
      this.value = this.value[0].name;
    }
   
  }

}
