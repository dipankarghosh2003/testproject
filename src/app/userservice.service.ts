import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class UserserviceService {

  constructor(private http : Http) { }

  fetchUser(){
  	return this.http.get('https://jsonplaceholder.typicode.com/users/');
  }
  myUser(){

  	return this.http.get('https://my-json-server.typicode.com/dipankarghosh2003/dbtesing/users');
  }

}
