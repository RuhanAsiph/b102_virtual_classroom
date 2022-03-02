import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Auth } from '../../models/authModel';

//fix
import { AuthService } from '../../../auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  
  authModel:Auth = {
    email:"", 
    password:"",
    roleId:"",
   
  }
  roles:any = [{
    roleId: 1,
    role: "Staff"
  },
  {
    roleId: 2,
    role: "Student"
  }
]
  
  
 
  constructor(private authService: AuthService) { }
  

  ngOnInit(): void {
  }
 
  login() {
    //observable
    this.authService.login(this.authModel).subscribe((res:any) => {
      if (res.status === 200) {
        this.authModel = {}
        alert(res.data)
      } else {
        this.authModel = {}
        alert(res.data)
      }
    })
  }

}
