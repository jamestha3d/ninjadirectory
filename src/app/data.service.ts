import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpdata:HttpClient) { }
  fetchData(){
    //return this.httpdata.get('assets/ninjas.json')
    return this.httpdata.get('https://nn-angular-d4653-default-rtdb.firebaseio.com/.json');
  }
}
