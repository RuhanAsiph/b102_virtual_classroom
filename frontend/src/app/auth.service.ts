import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Auth } from './auth-module/models/authModel'

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

  getCourses() {
    return this.http.get(`${this.server}/staff/get-courses`)
  }

  getContent(id:any) {
    return this.http.get(`${this.server}/staff/get-content/${id}`)
  }
}
