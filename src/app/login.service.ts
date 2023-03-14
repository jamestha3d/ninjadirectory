import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  log(){
    console.log('i am the logging service');
  }
  constructor() { }
}
