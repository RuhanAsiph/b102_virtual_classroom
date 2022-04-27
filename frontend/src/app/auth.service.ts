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

  sendMaterial(materialModel:any) {
    return this.http.put(`${this.server}/staff/upload-material`, materialModel)
  }

  fetchDoc(id: any){
    return this.http.get(`${this.server}/staff/fetch-doc/${id}`)
  }
  
  deleteDoc(dummyModel: any, id: any) {
    return this.http.put(`${this.server}/staff/delete-doc/${id}`, dummyModel)
  }


  sendMaterials(materialModel: any) {
    return this.http.put(`${this.server}/staff/upload-materials`, materialModel)
  }

  deleteMaterial(id: any, dataModel:any) {
    return this.http.put(`${this.server}/staff/delete-material/${id}`, dataModel)
  }

  //student
  getStudentCourses() {
    return this.http.get(`${this.server}/student/get-courses`)
  }

  lookUp(courseId: any){
    return this.http.get(`${this.server}/student/get-details/${courseId}`)
  }

  //enrollment 
  sendEnrollmentDetailsOfTheStudent(dataModel: any) {
    return this.http.post(`${this.server}/student/enroll-details`, dataModel)
  }

  //search functionality for course retrieval
  getSearchKeyResults(searchKey: any){
    return this.http.get(`${this.server}/student/get-search-results/${searchKey}`)
  }
}
