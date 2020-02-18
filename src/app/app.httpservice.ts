
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import dropDown from './dropdown/dropdown.model';


@Injectable({
  providedIn: 'root'
})
export class dataHttpService {
  private ApiEuropeURL: string = 'https://restcountries.eu/rest/v2/region/europe';
  private ApiAsiaURL: string = 'https://restcountries.eu/rest/v2/region/asia';
  
  
  constructor(private httpclient: HttpClient) {}

  getData(data:string): Observable<any[]> {
    if(data == "Asia"){
      return this.httpclient.get<any[]>(this.ApiAsiaURL);
    }else{
      return this.httpclient.get<any[]>(this.ApiEuropeURL);
    }
  }

  // createToDos(payload: any): Observable<any> {
  //   return this.httpclient.post<any>(this.ApiEuropeURL, JSON.stringify(payload), {
  //     headers: { 'Content-Type': 'application/json' }
  //   });
  // }
}
