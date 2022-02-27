import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Auth } from '../../models/authModel';

//fix
import { AuthService } from '/home/abdullah/workspace/b102_lelafe_fullstack_virtual_classroom/frontend/src/app/auth-module/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, AfterViewInit{
  
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
  
  @ViewChild('form')detail!: ElementRef;
  ngAfterViewInit() {
    // this.detail.nativeElement.style.color="red"
   }

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
