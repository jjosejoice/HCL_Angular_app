import { Action, createReducer, on } from '@ngrx/store';

import {selectRegion,selectCountry,loadDataFailure,loadDataSuccess ,setDetails} from './app.actions';

interface StringArray {
  [index: number]: string;
}
export const userFeatureKey = 'user';

export interface State {
  regions:StringArray;
  selectedRegion:String;
  regionLabel:String;

  country:StringArray;
  selectedCountry:String;
  countryLabel:String;
  countryList:any[];

  details:any;

}

export const initialState: State = {
  regions :["Asia","Europe"],
  selectedRegion: "",
  regionLabel:"Select a Region",
  country :["Asia","Europe"],
  selectedCountry: "",
  countryLabel:"Select a Country",
  countryList:[],
  details:{}

};

const userReducer = createReducer(
  initialState,
  on(selectRegion, (state:State, {data}) => {  
        console.log(data);
          return {...state, selectedRegion:data};
        }),
  on(selectCountry, (state:State, {data}) => {  
          console.log(data);
            return {...state, selectedCountry:data};
          }),
  on(loadDataSuccess, (state: any, { data }) => {
    console.log("data::"+data);
    let countries = data.map((item) => {  return item.name;});
    return { ...state, country:countries,countryList:data};
  }),

  on(setDetails, (state: any, { data }) => {
    return { ...state, details:data};
  })

);


export function reducer(state: State | undefined, action: Action) {
  return userReducer(state, action);
}
// export function reducer(state  ,action) {
//   return _counterReducer(state, action);
// }
