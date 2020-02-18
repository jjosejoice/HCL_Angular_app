import { Component, OnInit, Output,EventEmitter } from '@angular/core';

import {Observable,Subscription} from 'rxjs';
import { map } from 'rxjs/operators';
import {select, Store} from '@ngrx/store';

import {selectRegion, selectCountry,getDataFromService,setDetails} from './../app.actions';
import dropDown from '../dropdown/dropdown.model';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  
  regions$: Observable<any>;
  regionsSubscription: Subscription;
  region:any;
  dropDownRegion:dropDown;
  dropDownCountry:dropDown;
  details:any;
  
  constructor(private store: Store<{ regions: any }>) {
    this.regions$ = store.pipe(select('regions'));
    console.log("regions : "+this.regions$);
  }

  ngOnInit() {
    this.regionsSubscription = this.regions$
      .pipe(
        map(x => {
          this.region = x;
       
          let dd =new dropDown("region",x.regionLabel,x.regions,x.selectedRegion);
          this.dropDownRegion = dd;

          let ddc =new dropDown("country",x.countryLabel  );
          x.selectedRegion.length >0  && ddc.set("country",x.countryLabel,x.country,x.selectedCountry);
          this.dropDownCountry = ddc;
          
        })
      )
      .subscribe();

  }

    selectRegion(event) {
      this.store.dispatch(selectRegion({data:event.value}));
    }
    selectedEvent(event) {
      if(event.type == "region"){
        this.store.dispatch(selectRegion({data:event.value}));
        this.store.dispatch(getDataFromService({data:event.value}));
      }else{
        this.store.dispatch(selectCountry({data:event.value}));
        let detail = this.region.countryList.filter((item)=> { return item.name == event.value;});
        this.store.dispatch(setDetails(detail));
        this.details = detail;
      }
      
    }

    getIsSelected(){
      return !(this.region.selectedRegion.length>0);
    }
   

}
