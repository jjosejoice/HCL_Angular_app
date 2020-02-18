import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

import {Observable,Subscription} from 'rxjs';

import {selectRegion} from './../app.actions';
import dropDown from './dropdown.model';


@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent implements OnInit {
  
  @Input() dropDown: dropDown; 
  @Input() disabled: boolean=false; 
  @Output() selectedValue = new EventEmitter<any>();
  selected:string="";
 
  constructor() {
   
  }

  ngOnInit() {
   
  }

  selectRegion(event) {
      this.selectedValue.emit({"value":event.value,"type":this.dropDown.type});
  }
}

