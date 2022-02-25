import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Auth } from './models/authModel'

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  server = environment.server;
  constructor(private http: HttpClient) { }


  //api 
  login(authModel:Auth) {
    return this.http.post(`${this.server}/user/login`, authModel)  
  }

  register(userModel:any){
    return this.http.post(`${this.server}/user/register`, userModel)
  }

}
